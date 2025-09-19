import React, { useState, useEffect } from 'react';
import '../css/NotFound.css';

const NotFound = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="not-found-container">
      {/* Animated background elements */}
      <div
        className="mouse-gradient"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`
        }}
      />

      {/* Floating particles */}
      <div className="particles-container">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className={`main-content ${isVisible ? 'visible' : ''}`}>
        {/* 404 Number */}
        <div className="number-container">
          <h1 className="main-number">404</h1>
          <div className="number-shadow">404</div>
        </div>

        {/* Animated text */}
        <div className="title-container">
          <h2 className="animated-title">
            <span style={{ animationDelay: '0.1s' }}>P</span>
            <span style={{ animationDelay: '0.2s' }}>a</span>
            <span style={{ animationDelay: '0.3s' }}>g</span>
            <span style={{ animationDelay: '0.4s' }}>e</span>
            <span className="space" style={{ animationDelay: '0.5s' }}> </span>
            <span style={{ animationDelay: '0.6s' }}>N</span>
            <span style={{ animationDelay: '0.7s' }}>o</span>
            <span style={{ animationDelay: '0.8s' }}>t</span>
            <span className="space" style={{ animationDelay: '0.9s' }}> </span>
            <span style={{ animationDelay: '1.0s' }}>F</span>
            <span style={{ animationDelay: '1.1s' }}>o</span>
            <span style={{ animationDelay: '1.2s' }}>u</span>
            <span style={{ animationDelay: '1.3s' }}>n</span>
            <span style={{ animationDelay: '1.4s' }}>d</span>
          </h2>
        </div>

        {/* Description */}
        <p className="description">
          Oops! The page you're looking for seems to have vanished into the digital void.
        </p>

        {/* Action buttons */}
        <div className="buttons-container">
          <button
            onClick={() => window.history.back()}
            className="go-back-btn go-back-btn-primary"
          >
            Go Back
          </button>


          <button
            onClick={() => window.location.href = '/'}
            className="btn btn-secondary"
          >
            <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </button>
        </div>

        {/* Decorative element */}
        <div className="decoration">
          <div className="decoration-line" />
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="bottom-decoration">
        <div className="dots-container">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="dot"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;