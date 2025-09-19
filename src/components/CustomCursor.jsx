import React, { useEffect, useRef } from 'react';
import '../css/CustomCursor.css';

const CustomCursor = () => {
  const innerRef = useRef(null);
  const outerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (innerRef.current && outerRef.current) {
        innerRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
        outerRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    };

    const clickEffect = () => {
      if (outerRef.current) {
        outerRef.current.classList.add('click-expand');
        setTimeout(() => {
          outerRef.current.classList.remove('click-expand');
        }, 300);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', clickEffect);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', clickEffect);
    };
  }, []);

  return (
    <>
      <div className="cursor-outer" ref={outerRef}></div>
      <div className="cursor-inner" ref={innerRef}></div>
    </>
  );
};

export default CustomCursor;
