import React from 'react';
import { motion } from 'framer-motion';
import '../css/Functional.css';
import {
  FaChartBar, FaMoneyBillWave, FaClipboardList, FaNetworkWired, FaMobileAlt,
  FaGem, FaGlobe, FaLink, FaChartLine, FaComments, FaBriefcase,
  FaExclamationTriangle, FaRegFileAlt, FaCogs
} from 'react-icons/fa';

const features = [
  { id: 1, title: "Book Keeping", description: "Helps Maintaining day to day account books", icon: FaChartBar },
  { id: 2, title: "Payroll", description: "Processing of Wages and Monthly Salary made easier with Easy Handling of Attendance and Loans", icon: FaMoneyBillWave },
  { id: 3, title: "Asset Tracking", description: "Keep track of the value changes in your assets and Insurance, AMC, Depreciation and maintenance of them", icon: FaClipboardList },
  { id: 4, title: "Networking", description: "Helps to Keep in touch constantly with Donors through Email, SMS and Letters", icon: FaNetworkWired },
  { id: 5, title: "Monitoring", description: "Helps Monitoring Branches/Communities from Head Office on Accounting and other Aspects", icon: FaMobileAlt },
  { id: 6, title: "Consolidation", description: "Consolidation of Accounts across the Branches under a Head office made easier", icon: FaGem },
  { id: 7, title: "Foreign Contribution", description: "Foreign Contribution management is made simpler and the Reports are generated instantly", icon: FaGlobe },
  { id: 8, title: "Third Party Integration", description: "Integration and Migration of Accounts Data with third party Application is made available for Automating", icon: FaLink },
  { id: 9, title: "Report Generation", description: "Reports needed for Auditing are made available with in few key stroke and User Friendly options are made for", icon: FaChartLine },
  { id: 10, title: "Communication", description: "Helps in Communicating with Sub-Centers easily and pass on the information", icon: FaComments },
  { id: 11, title: "Budgeting", description: "Budgeting and Cost Centers are Made Easier to keep the finance in control and to track in depth", icon: FaBriefcase },
  { id: 12, title: "Alerts", description: "Alerts and reminders are given for any schedules like Data Submission, Correction, Investment Renewal, etc...", icon: FaExclamationTriangle },
  { id: 13, title: "Policy Implementation", description: "Helps Head Offices to Implement Policies easily across the Multiple Branches", icon: FaRegFileAlt },
  { id: 14, title: "Customization", description: "We customize modules based on your specific needs", icon: FaCogs }
];

const iconPulseVariants = {
  animate: {
    scale: [1, 1.12, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const iconRotateVariants = {
  hover: {
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: "easeInOut"
    }
  }
};


const Functional = () => {
  return (
    <>

      <div className="acme-section">
        <div className="acme-container">
          <motion.div className="acme-header" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="welcome-tag">Functional Suite</p>
            <h1 className="acme-title">Acme.erp Modules</h1>
          </motion.div>

          <div className="acme-grid">
            {features.map(({ id, title, description, icon: Icon }) => (
              <motion.div
                key={id}
                className="acme-col"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div className="acme-card">
                  <motion.div
                    className="acme-icon"
                    variants={iconRotateVariants}
                    whileHover="hover"
                    animate="animate"
                  >
                    <motion.div
                      variants={iconPulseVariants}
                      animate="animate"
                    >
                      <Icon />
                    </motion.div>
                  </motion.div>

                  <h3 className="acme-title-text">{title}</h3>
                  <p className="acme-desc">{description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Functional;
