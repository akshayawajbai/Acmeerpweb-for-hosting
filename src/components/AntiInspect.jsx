import { useEffect } from "react";

/**
 * AntiInspect
 * - Blocks basic right-click + common inspect shortcuts
 * - Uses combined detection (viewport size change + console getter)
 * - Avoids reload/alert loops by storing a handled flag in sessionStorage
 *
 * NOTE: This cannot fully prevent anyone from using DevTools. Use server-side protections,
 * obfuscation/minification, remove source maps in production, and CSP for real protection.
 */
const AntiInspect = () => {
  useEffect(() => {
    // --- Basic blockers ---
    const disableRightClick = (e) => {
      e.preventDefault();
    };
    const disableKeys = (e) => {
      // Normalize key for cross-browser (some browsers give uppercase)
      const k = typeof e.key === "string" ? e.key.toUpperCase() : e.key;
      if (
        k === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(k)) ||
        (e.ctrlKey && k === "U")
      ) {
        e.preventDefault();
        // Optional: user feedback
        // alert("This action is disabled.");
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableKeys);

    // --- Detection helpers ---
    let handled = sessionStorage.getItem("antiInspectHandled") === "1";
    const markHandled = () => {
      handled = true;
      sessionStorage.setItem("antiInspectHandled", "1");
    };

    const threshold = 160; // px difference that usually indicates devtools open (tweak if needed)
    let lastDetection = 0;

    // console getter trick (fires when console tries to access object properties)
    const consoleProbe = () => {
      try {
        const probe = {
          get isOpen() {
            // mark detection
            lastDetection = Date.now();
            return true;
          },
        };
        // Logging probe; in many consoles inspecting the logged object will trigger the getter
        // The string '%c' prevents some consoles from auto-expanding the object immediately,
        // but many still evaluate getters when displaying objects.
        // This is a "best-effort" check.
        // eslint-disable-next-line no-console
        console.log("%c", probe);
      } catch (err) {
        // ignore
      }
    };

    // viewport difference check
    const checkViewportDiff = () => {
      const widthDiff = Math.abs(window.outerWidth - window.innerWidth);
      const heightDiff = Math.abs(window.outerHeight - window.innerHeight);
      if (widthDiff > threshold || heightDiff > threshold) {
        lastDetection = Date.now();
        return true;
      }
      return false;
    };

    // Combined periodic check
    const intervalId = setInterval(() => {
      // run both checks
      const v = checkViewportDiff();
      consoleProbe();

      // if either method recently set lastDetection, consider devtools open
      const now = Date.now();
      if (!handled && now - lastDetection < 1500) {
        // handle once only
        markHandled();

        // Do not immediately reload repeatedly — show alert and reload once (or just navigate away)
        try {
          // show a single alert to inform user; you can replace with modal or redirect
          alert("Developer tools detected. Reloading page for security.");
        } catch (e) {
          // ignore alert errors (rare)
        }

        // small delay to avoid race conditions
        setTimeout(() => {
          // only reload once
          if (sessionStorage.getItem("antiInspectHandled") === "1") {
            window.location.reload();
          }
        }, 250);
      }
    }, 1000);

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableKeys);
      clearInterval(intervalId);
    };
  }, []);

  return null;
};

export default AntiInspect;
