import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "../css/login.css";
import Acme_logo from "../assets/icon.png";
import login_bg from "../assets/img/bg/loginbg3.jpg";

const MESSAGE_MAP = {
  "1": "Session Expired. Please Login again.",
  "2": "Successfully Logged out.",
  "3": "Invalid Username or Password.",
  "4": "Server is under maintenance.",
};

const ICON_MAP = {
  "1": "warning",
  "2": "success",
  "3": "error",
  "4": "info",
};

function showToast(title, icon = "info") {
  Swal.fire({
    toast: true,
    position: "top-end",
    icon,
    title,
    showConfirmButton: false,
    timer: 3500,
    timerProgressBar: true,
    didOpen: (toastEl) => {
      toastEl.addEventListener("mouseenter", Swal.stopTimer);
      toastEl.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
}

export default function Login() {
  const [message, setMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search || "");
    let msg = params.get("msg");

    if (!msg) {
      const hash = window.location.hash || "";
      const qIndex = hash.indexOf("?");
      if (qIndex !== -1) {
        const hashParams = new URLSearchParams(hash.substring(qIndex));
        msg = hashParams.get("msg");
      }
    }

    if (msg && MESSAGE_MAP[msg]) {
      const text = MESSAGE_MAP[msg];
      setMessage(text);
      const icon = ICON_MAP[msg] || "info";
      console.log(text, icon);
      showToast(text, icon);
    } else {
      setMessage("");
    }
    // include full location so changes to hash/search re-run effect
  }, [location]);

  return (
    <div
      className="acme-login-page"
      // style={{
      //   backgroundImage: `url(${login_bg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   minHeight: "100vh",
      // }}
    >
      <div className="acme-login-wrap">
        <h1 className="acme-login-title">Sign in to continue to Acme.erp Portal</h1>
        <div className="acme-login-card">
          <img className="acme-login-logo" src={Acme_logo} alt="Acme.erp" />
          <form
            className="acme-login-form"
            method="post"
            action="https://acmeerp.org/Account/portal/Default.aspx"
            autoComplete="on"
          >
            <input
              type="text"
              className="acme-input"
              name="hocode"
              placeholder="Head Office Code"
              required
              autoFocus
              autoComplete="organization"
            />
            <input
              type="text"
              className="acme-input"
              name="username"
              placeholder="User Name"
              required
              autoComplete="username"
            />
            <input
              type="password"
              className="acme-input"
              name="password"
              placeholder="Password"
              required
              autoComplete="current-password"
            />
            <button className="acme-submit-btn" type="submit">
              Sign in
            </button>
            {/* Inline message removed: toast will handle notifications */}
          </form>
        </div>
        <footer className="acme-login-footer">
          <p>
            Powered By{" "}
            <a
              href="http://www.boscosofttech.com"
              title="Visit Boscosoft"
              target="_blank"
              rel="noreferrer"
            >
              Boscosoft
            </a>{" "}
            | All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
