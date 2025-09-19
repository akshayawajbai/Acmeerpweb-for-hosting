import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp
} from 'react-icons/fa';
import '../css/Header.css';
const Header = () => {
  return (
    <header className="header-top  text-white py-2">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left side - Contact Information */}
          <div className="col-md-8">
            <div className="d-flex flex-wrap align-items-center contact-info">
              <div className="d-flex align-items-center me-4 mb-1">
                <FaPhone className="me-2" />
                <span className="contact-text">+91 96 26 800 800</span>
              </div>
              <div className="d-flex align-items-center mb-1">
                <FaEnvelope className="me-2" />
                <a href="mailto:binfo@boscosofttech.com"
                  className="contact-text"
                  whileHover={{ scale: 1.05, color: "#ffffff" }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  binfo@boscosofttech.com
                </a>

              </div>
            </div>
          </div>

          {/* Right side - Follow Us and Social Media Icons */}
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-md-end justify-content-start">
              <span className="follow-text me-3">Follow Us On :</span>
              <div className="social-icons d-flex">
                <a href="https://www.facebook.com/acme.erp.boscsoft/" target="_blank" rel="noopener noreferrer" className="social-link me-2">
                  <FaFacebookF />
                </a>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2FBoscosoft1" target="_blank" rel="noopener noreferrer" className="social-link me-2">
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/showcase/acme-erp-accounting-management-software" target="_blank" rel="noopener noreferrer" className="social-link me-2">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Facme.erp%2F%3Fnext%3D%252F&is_from_rle" target="_blank" rel="noopener noreferrer" className="social-link me-2">
                  <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@boscosofttechnologies2022" target="_blank" rel="noopener noreferrer" className="social-link me-2">
                  <FaYoutube />
                </a>
                <a href="https://www.whatsapp.com/channel/0029ValB9Yn6buMSw2fqOF2a" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;