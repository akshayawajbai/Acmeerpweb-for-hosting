import React, { useState, useEffect } from 'react';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import '../css/Navbar.css';
import Acme_logo from '../assets/acme_logo.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { color } from 'framer-motion';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };



  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(sectionId), 200);
    } else {
      scrollToSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 100;
      setScrolled(window.scrollY > heroHeight - 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light shadow-sm ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid px-3 px-md-4">
        <div className="navbar-brand d-flex align-items-center">
          <div className="logo-container" onClick={() => handleNavClick('hero')} style={{ cursor: "pointer" }}>
            <img src={Acme_logo} alt="ACME Logo" className="logo-svg" />
          </div>
        </div>

        <button className="navbar-toggler border-0 p-0" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className={`navbar-collapse ${isMenuOpen ? 'show' : 'collapse'}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavClick('hero')}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavClick('about')}>About Us</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavClick('Functional')}>Modules</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavClick('review')}>Customers</button>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link btn btn-link">Contact</Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavClick('blogpost')}>Blog</button>
            </li>
          </ul>
          <div className="navbar-nav">
            <button
              className={`login-button ${isHovered ? "hovered" : ""}`}
              onClick={() => navigate("/login")}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              type="button"
            >
              <FaUser className="login-icon" size={16} />
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
