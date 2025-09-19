import React, { useState, useEffect } from 'react';
import '../css/About.css';
import image1 from '../assets/img/normal/about_13_2.jpg';
import { IoCopy } from "react-icons/io5";
import aboutus from "../assets/img/bg/aboutus.jpg";
import about2 from "../assets/img/normal/about_13_3.jpg";
import about1 from "../assets/img/normal/about_13_2.jpg";
import { motion } from "framer-motion";

import org1 from "../assets/img/client/friars.jpg";
import org2 from "../assets/img/client/jac.jpg";
import org3 from "../assets/img/client/Archdiocese.jpg";
import org4 from "../assets/img/client/chengelpet.jpg";
import org5 from "../assets/img/client/claretian.jpg";
import org6 from "../assets/img/client/congregation-of sister.jpg";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const itemLeftToRight = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const itemRightToLeft = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const About = () => {
  const width = useWindowWidth();
  const isMobile = width < 1100;

  const organizations = [
    { name: "Sisters of St. Anne Madras", image: org1 },
    { name: "Sisters of Charity", image: org2 },
    { name: "Hyderabad Archdiocese Educational Society", image: org3 },
    { name: "Claretian Missionaries", image: org4 },
    { name: "Congregation of Sisters of St. Anne, Tiruchirappalli", image: org5 },
    { name: "Congregation of the Sisters of St. Anne's, Bangalore", image: org6 }
  ];

  return (
    <div className="about-section">
      <div className="container">
        <div className="content-wrapper">
          {/* Left side - Image */}
          <div className="image-side">
            <div className="image-container">
              {isMobile ? (
                <>
                  <img className='image1' src={aboutus} />
                  <img className='image2 move-right' src={about2} alt="Image 2" />
                  <img className='image3 move-top' src={about1} alt="Image 3" />
                </>
              ) : (
                <>
                  <motion.img
                    className='image1'
                    src={aboutus}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                  <motion.img
                    className='image2 move-right'
                    src={about2}
                    alt="Image 2"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                  <motion.img
                    className='image3 move-top'
                    src={about1}
                    alt="Image 3"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                </>
              )}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="content-side">
            <div className="content-section">
              <h6 className='welcome-tag'>About Acme.erp</h6>
              <h2 className='about-title'>
                Empowering Smarter<br />
                Decisions for Faith-Based &<br />
                Nonprofit Organizations
              </h2>

              <p className="subtitle">
                Acme.erp is an ERP Solution uniquely designed for Religious and Not-for-Profit Organisations
              </p>

              {isMobile ? (
                <div className="features">
                  <div className="feature-item">
                    <div className='IoCopy'><IoCopy /></div>
                    <p className="feature-text">
                      Acme.erp is a client-server windows application integrated with a cloud-based application for administration and management of religious institutes and NGOs of any size, at multiple levels.
                    </p>
                  </div>
                  <div className="feature-item">
                    <div className='IoCopy'><IoCopy /></div>
                    <p className="feature-text">
                      It is developed and packaged as an Enterprise Resource Planning solution. Acme.erp is deployed as Head Office & Branch Office Suite. It is hosted in cloud to be accessible by all affected parties.
                    </p>
                  </div>
                </div>
              ) : (
                <motion.div
                  className="features"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div className="feature-item" variants={itemVariants}>
                    <div className='IoCopy'><IoCopy /></div>
                    <p className="feature-text">
                      Acme.erp is a client-server windows application integrated with a cloud-based application for administration and management of religious institutes and NGOs of any size, at multiple levels.
                    </p>
                  </motion.div>

                  <motion.div className="feature-item" variants={itemVariants}>
                    <div className='IoCopy'><IoCopy /></div>
                    <p className="feature-text">
                      It is developed and packaged as an Enterprise Resource Planning solution. Acme.erp is deployed as Head Office & Branch Office Suite. It is hosted in cloud to be accessible by all affected parties.
                    </p>
                  </motion.div>
                </motion.div>
              )}

              <div className="arrow-button-container"></div>
            </div>
          </div>
        </div>

        {/* Branch and Head Office Suite Section */}
        {isMobile ? (
          <div className="suite-section">
            <div className="suite-container">
              <div className="suite-item">
                <h2>Branch Office Suite</h2>
                <p>
                  Branch Office Suite is a Windows application from a single or multiple terminals. The system can be configured for a single or multiple users.
                  Branch office Application consists of seven Modules including Financial Accounting, Statutory Compliance, Asset Management, Payroll Processing, Networking (Donor Management).
                </p>
              </div>
              <div className="suite-item">
                <h2>Head Office Suite</h2>
                <p>
                  Head Office Suite is a web-based application for generating financial reports from all Branch Offices at different levels.
                  The data from the individual Branch Offices are updated to the Head Office on demand basis or asynchronously (on scheduled intervals).
                  It provides easy access to the financial statements of any Branch Office, drilling down to the level of single transaction.
                  Consolidated reports combining various branches on multiple criteria can be generated.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            className="suite-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="suite-container">
              <motion.div className="suite-item" variants={itemLeftToRight}>
                <h2>Branch Office Suite</h2>
                <p>
                  Branch Office Suite is a Windows application from a single or multiple terminals. The system can be configured for a single or multiple users.
                  Branch office Application consists of seven Modules including Financial Accounting, Statutory Compliance, Asset Management, Payroll Processing, Networking (Donor Management).
                </p>
              </motion.div>
              <motion.div className="suite-item" variants={itemRightToLeft}>
                <h2>Head Office Suite</h2>
                <p>
                  Head Office Suite is a web-based application for generating financial reports from all Branch Offices at different levels.
                  The data from the individual Branch Offices are updated to the Head Office on demand basis or asynchronously (on scheduled intervals).
                  It provides easy access to the financial statements of any Branch Office, drilling down to the level of single transaction.
                  Consolidated reports combining various branches on multiple criteria can be generated.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Partner Organizations Marquee */}
      <div className="marquee-section">
        {/* <h2 className="marquee-title">Our Customers</h2> */}
       <p style={{ color: "#004868" }} className="welcome-tag fw-semibold">Our Customers</p>

       <div>
        <p className="subtitle"> Our customers are at the heart of everything we do, and we serve them with innovation, trust, and excellence.</p> </div>
        <div className="marquee-container">
          <div className="marquee">
            {[...organizations, ...organizations, ...organizations].map((org, index) => (
              <div className="marquee-item" key={`org-${index}`}>
                <img src={org.image} alt={org.name} className="org-logo" />
                <span>{org.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
