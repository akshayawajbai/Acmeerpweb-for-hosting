import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaYoutube, FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../css/Footer.css';
import companylogo from '../assets/img/0_Boscsoft.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = element.getBoundingClientRect().top + window.scrollY - 80;
        setTimeout(() => {
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }, 200);
      }
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  const handleNavClick = (sectionId) => {
    if (sectionId.startsWith('/')) {
      navigate(sectionId);
    } else if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else { 
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
    hover: { scale: 1.2 },
  };

  const linkVariants = {
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <motion.footer
      className="footer-wrapper"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Newsletter */}
      <motion.div
        className="newsletter-section newsletter-container"
        variants={itemVariants}
      >
        <motion.h2
          className="newsletter-title"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Subscribe for daily update
        </motion.h2>
        <motion.form className="newsletter-form" onSubmit={handleSubscribe}>
          <motion.div className="newsletter-input-wrapper">
            <Mail className="newsletter-icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>
          <motion.button type="submit" className="newsletter-button">
            Subscribe Now
          </motion.button>
        </motion.form>
      </motion.div>

      {/* Footer Main */}
      <motion.div
        className="footer-main footer-grid footer-container"
        variants={containerVariants}
      >
        {/* About */}
        <motion.div variants={itemVariants}>
          <h3>About Company</h3>
          <p>
            Our strength lies in our innovative approach, user friendliness and staunch customer support with a focus on mobile access and AI Integration.
          </p>
          <motion.div
            className="company-logo"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <a
              href="https://www.boscosofttech.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={companylogo}
                alt="Boscosoft Logo"
                className="company-logo-img"
              />
            </a>
          </motion.div>
          <div className="footer-social-icons" style={{ display: 'flex', gap: '10px' }}>
            {[
              { Icon: FaFacebookF, color: '#1877F2', link: 'https://www.facebook.com/acme.erp.boscsoft/' },
              { Icon: FaTwitter, color: '#1DA1F2', link: 'https://x.com/i/flow/login?redirect_after_login=%2FBoscosoft1' },
              { Icon: FaLinkedinIn, color: '#0A66C2', link: 'https://www.linkedin.com/showcase/acme-erp-accounting-management-software' },
              { Icon: FaInstagram, color: '#E4405F', link: 'https://www.instagram.com/acme.erp/' },
              { Icon: FaYoutube, color: '#FF0000', link: 'https://www.youtube.com/@boscosofttechnologies2022' },
              { Icon: FaWhatsapp, color: '#25D366', link: 'https://www.whatsapp.com/channel/0029ValB9Yn6buMSw2fqOF2a' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                variants={socialVariants}
                whileHover="hover"
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <social.Icon size={20} color={social.color} />
              </motion.a>
            ))}
          </div>
          
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3>Quick Links</h3>
          <ul>
            {[
              { label: 'About Us', id: 'about' },
              { label: 'Module', id: 'Functional' },
              { label: 'Customers', id: 'review' },
              { label: 'Contact', id: '/contact' }, 
              { label: 'Blog', id: 'blogpost' }
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.button
                  onClick={() => handleNavClick(item.id)}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  ▷ {item.label}
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Other Products */}
        <motion.div variants={itemVariants}>
          <h3>Other Products & Services</h3>
          <ul>
            {[
              { label: 'School Management Software', url: 'https://www.smartschoolonline.com/' },
              { label: 'College Management Software', url: 'https://higrade.live/' },
              { label: 'Church Management Software', url: 'https://cristoerp.com/' },
              { label: 'Web Design & App Development', url: 'https://www.boscosofttech.com/services/web-development' },
              { label: 'Mobile App Development and Modularization', url: 'https://www.boscosofttech.com/services/mobile-app' }
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  ▷ {item.label}
                </motion.a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Address */}
        <motion.div variants={itemVariants}>
          <h3>Address</h3>
          <motion.p initial={{ opacity: 0.7 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            Bosco Soft Technologies Pvt Ltd.<br />
             No. 231/77, S.H.C,<br />
             Vaniyambadi Road, Tirupathur,<br />
            635 601 TN.
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
            +91 9626 800 800
          </motion.p>
          <motion.a
            href="mailto:binfo@boscosofttech.com"
            whileHover={{ scale: 1.05, color: "#ffffff" }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            binfo@boscosofttech.com
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="footer-bottom footer-container"
        variants={itemVariants}
      >
        <motion.div initial={{ opacity: 0.8 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.3 }}>
          Copyright © 2025{' '}
          <motion.a
            href="https://boscosofttech.com/"
            style={{ color: '#1e5e7e', textDecoration: 'none' }}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: '#0f5a7a' }}
            transition={{ duration: 0.3 }}
          >
            Bosco Soft Technologies Pvt.Ltd
          </motion.a>
          . All Rights Reserved.
        </motion.div>
        <div className="footer-links">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/Termscondition" className="nav-link btn btn-link">
              Terms & condition
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/Privacy-Policy" className="nav-link btn btn-link">
              Privacy Policy
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;