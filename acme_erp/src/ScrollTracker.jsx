// components/ScrollTrackerCircle.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTrackerCircle = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const navigate = useNavigate();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const radius = 30;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollPercentage / 100) * circumference;

 const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClick = () => {
    setTimeout(() => scrollToSection('hero'), 100);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        width: '60px',
        height: '60px',
        cursor: 'pointer',
        backgroundColor: '#fff',
        borderRadius: '50%',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg height={radius * 2} width={radius * 2} style={{ position: 'absolute' }}>
        <circle
          stroke="#ccc"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#1e5e7e"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            transition: 'stroke-dashoffset 0.2s ease-out',
            transform: 'rotate(-90deg)',
            transformOrigin: '50% 50%',
          }}
        />
      </svg>
      <FaArrowUp color="#1e5e7e" size={18} />
    </div>
  );
};

export default ScrollTrackerCircle;
