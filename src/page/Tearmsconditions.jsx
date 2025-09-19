import React, { useState, useEffect } from 'react';
import '../css/Tearmsconditions.css';

const TermsConditions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const styles = {
    body: {
      background: '#f5f7fa',
      padding: '40px 0',
      fontFamily: "'Segoe UI', sans-serif",
    },
    termsContainer: {
      background: '#ffffff',
      borderRadius: '12px',
      padding: '40px 30px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.06)',
      marginTop: '40px',
      marginBottom: '60px',
    },
    termsHeader: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    headerTitle: {
      fontSize: '2.5rem',
      color: '#1E5E7E',
      fontWeight: '700',
      marginBottom: '10px',
    },
    headerSubtitle: {
      fontSize: '1.1rem',
      color: '#555',
    },
    toc: {
      backgroundColor: '#f9fbfc',
      padding: '20px',
      borderLeft: '4px solid #1E5E7E',
      borderRadius: '8px',
      marginBottom: '40px',
    },
    tocTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#1E5E7E',
      marginBottom: '10px',
    },
    tocList: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    tocItem: {
      marginBottom: '8px',
    },
    tocItemLast: {
      marginBottom: 0,
    },
    tocLink: {
      textDecoration: 'none',
      color: '#1E5E7E',
      transition: 'color 0.2s ease-in-out',
    },
    noticeSection: {
      background: '#fff4e5',
      borderLeft: '5px solid #ffa726',
      padding: '20px',
      borderRadius: '6px',
      marginBottom: '20px',
    },
    noticeSectionTitle: {
      fontWeight: 'bold',
      color: '#e65100',
      fontSize: '1.2rem',
      marginBottom: '10px',
    },
    companyInfo: {
      background: '#eef6f9',
      padding: '15px 20px',
      borderLeft: '4px solid #1E5E7E',
      borderRadius: '6px',
      marginBottom: '20px',
    },
    highlightText: {
      fontWeight: 'bold',
      color: '#0f5a7a',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      color: '#1E5E7E',
      fontWeight: 'bold',
      marginTop: '40px',
      marginBottom: '15px',
    },
    sectionTitleFirst: {
      marginTop: 0,
    },
    sectionContent: {
      fontSize: '1rem',
      color: '#444',
      lineHeight: '1.7',
      marginBottom: '20px',
    },
    contactInfo: {
      background: '#f1f8e9',
      padding: '20px',
      borderLeft: '5px solid #689f38',
      borderRadius: '6px',
      marginTop: '40px',
    },
    contactInfoTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#33691e',
      marginBottom: '10px',
    },
    emailLink: {
      color: '#1E5E7E',
      textDecoration: 'none',
    },
    scrollTopButton: {
      position: 'fixed',
      bottom: '20px',
      right: '25px',
      backgroundColor: '#1E5E7E',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      fontSize: '18px',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      transition: 'transform 0.3s ease',
      zIndex: 999,
    },
  };

  return (
    <div style={styles.body}>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div style={styles.termsContainer}>
              <div style={styles.termsHeader}>
                <h1 style={styles.headerTitle}>📄 Terms & Conditions</h1>
                <p style={styles.headerSubtitle}>Please read these terms carefully before using our services</p>
              </div>

              {/* Content */}
              <div style={styles.termsContent}>
                {/* Table of Contents */}
                <div style={styles.toc}>
                  <h4 style={styles.tocTitle}>📋 Table of Contents</h4>
                  <ul style={styles.tocList}>
                    {[
                      { id: 'notice', text: 'Notice' },
                      { id: 'use-site-services', text: 'Use of The Site and our Services' },
                      { id: 'general-terms', text: 'General Terms' },
                      { id: 'use-site', text: 'Use of The Site' },
                      { id: 'testimonials', text: 'Testimonials Disclaimer' },
                      { id: 'links', text: 'Links to other websites' },
                      { id: 'intellectual-property', text: 'Intellectual Property' },
                      { id: 'confidentiality', text: 'Confidentiality' },
                      { id: 'applicability', text: 'Applicability of Materials' },
                      { id: 'user-info', text: 'User Information' },
                      { id: 'governing-law', text: 'Governing Law' },
                      { id: 'contact', text: 'Contact Us' }
                    ].map((item, index, array) => (
                      <li
                        key={item.id}
                        style={index === array.length - 1 ? { ...styles.tocItem, ...styles.tocItemLast } : styles.tocItem}
                      >
                        <a
                          href={`#${item.id}`}
                          style={styles.tocLink}
                          onClick={(e) => scrollToSection(e, item.id)}
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Notice Section */}
                <div style={styles.noticeSection} id="notice">
                  <h4 style={styles.noticeSectionTitle}>⚠️ Notice</h4>
                  <p>By accessing and using Boscosoft's website (www.BoscosoftTech.com) or by downloading materials from Boscosoft's website or using any of the services we offer, you agree to abide by the terms and conditions of use detailed below. If you do not agree to be bound by these terms and conditions of use, please refrain from using the Boscosoft website or our services.</p>
                </div>

                {/* Company Info */}
                <div style={styles.companyInfo}>
                  <p><strong>Boscosoft</strong> is an IT services company registered and based in India. Our normal working hours are from <span style={styles.highlightText}>9:15 AM to 6:15 PM, IST, from Monday to Friday</span>. All Sundays and alternative Saturdays (First & Third) will be off for the company.</p>
                </div>

                {/* Use of The Site and our Services */}
                <h3 style={{ ...styles.sectionTitle, ...styles.sectionTitleFirst }} id="use-site-services">
                  🌐 Use of The Site and our Services
                </h3>
                <div style={styles.sectionContent}>
                  <p>References to "we", "us" or "our" throughout this Website (www.BoscosoftTech.com) pertains to Boscosoft which operates the Site. We reserve the right to modify these terms and conditions from time to time without any prior notice, after which the use of our website will be governed by that revised version. You are hence recommended to check the terms and conditions on the website regularly. Keep in mind that the use of Boscosoft's services is also subject to, and controlled by, the Agreement subscribed to by the User, and the use of the website is also subject to the Privacy Policy notified on the website.</p>
                </div>

                {/* General Terms */}
                <h3 style={styles.sectionTitle} id="general-terms">
                  📄 General Terms
                </h3>
                <div style={styles.sectionContent}>
                  <p>Boscosoft is an IT services company registered and based in India and the project execution of all the projects we undertake will take place at our development centers in India. Our normal working hours are from 9:15 AM to 6:15 PM, IST, from Monday to Friday. All Sundays and alternative Saturdays (First & Third) will be off for the company.</p>
                </div>

                {/* Use of The Site */}
                <h3 style={styles.sectionTitle} id="use-site">
                  💻 Use of The Site
                </h3>
                <div style={styles.sectionContent}>
                  <p>There is no charge imposed by us for accessing the Site but you are liable to pay the cost of the communications link you used to visit the Site. The content of the pages on the website are for general information and use only. It is subject to change without notice. Neither Boscosoft nor any third party provides any warranty or guarantee to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on the website for any particular purpose. Boscosoft shall not be in any way liable for any inaccuracy, error, defect, or fault related to the information and materials found or offered on the website.</p>

                  <p>Use of any information or materials on the website is entirely at the User's own risk, for which Boscosoft shall not be liable. It shall be the User's own responsibility to ensure that any product, service, or information available through the website meets the User's requirements. Unauthorized use of the website may give rise to a claim for damages and/or it will be a criminal offense punishable under the applicable penal law.</p>
                </div>

                {/* Testimonials Disclaimer */}
                <h3 style={styles.sectionTitle} id="testimonials">
                  💬 Testimonials Disclaimer
                </h3>
                <div style={styles.sectionContent}>
                  <p>The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume that all users will have the same experiences.</p>
                </div>

                {/* Links to other websites */}
                <h3 style={styles.sectionTitle} id="links">
                  🔗 Links to other websites
                </h3>
                <div style={styles.sectionContent}>
                  <p>Boscosoft makes no representation of any other websites that you may access through Boscosoft's website or which may be linked to Boscosoft's website. We are not responsible for the privacy practices of other websites linked to Boscosoft's website. Users are required to read the privacy policies or statements of other such websites they visit. Any concern regarding any external link should be directed to the website administrator of the site concerned.</p>
                </div>

                {/* Intellectual Property */}
                <h3 style={styles.sectionTitle} id="intellectual-property">
                  ©️ Intellectual Property
                </h3>
                <div style={styles.sectionContent}>
                  <p>All rights related to the Site design, text, graphics, and other content, the selection, and arrangements are licensed to Boscosoft. The content of this website is protected by international copyright laws and other intellectual property rights. All company names and logos mentioned on this website are the trademarks, service marks, or trading names of their respective owners, including us. You may not modify, copy, reproduce, republish, upload, post, transmit or distribute by any means or in any manner, any material or information on the website or downloaded from this website including but not limited to text, graphics, video, messages, code and/or software without our prior written consent, except where expressly invited to do so.</p>

                  <p>Boscosoft respects the intellectual property of others. If you believe that your work has been copied in a way that constitutes copyright infringement, please contact us by e-mail at <a href="mailto:binfo@boscosofttech.com" style={styles.emailLink}>binfo@boscosofttech.com</a></p>
                </div>

                {/* Confidentiality */}
                <h3 style={styles.sectionTitle} id="confidentiality">
                  🛡️ Confidentiality
                </h3>
                <div style={styles.sectionContent}>
                  <p>We understand the importance of confidentiality to the successful planning, establishment, and running of your business. Therefore, we will not use, divulge or communicate to any person, except as may be required by law or any legal or regulatory authority, any confidential information concerning the business or affairs of any customer, prospective customer, or supplier of Boscosoft, or any of our international distributors. All of us shall endeavor our best to prevent the publication or disclosure of any confidential information concerning such matters.</p>
                </div>

                {/* Applicability of Materials */}
                <h3 style={styles.sectionTitle} id="applicability">
                  ⚖️ Applicability of Materials
                </h3>
                <div style={styles.sectionContent}>
                  <p>We have done our best to ensure that our website complies with international laws. However, we make no representations that the materials on our website are appropriate or available for use in all international locations. Those who visit our website from other locations do so, on their own initiative and are responsible to comply with local laws. If it is not legal for you to access, browse it or use any material or content, or services offered through our website violating any applicable law in your jurisdiction(s), you are not authorized to view or use our website and you must exit immediately.</p>
                </div>

                {/* User Information */}
                <h3 style={styles.sectionTitle} id="user-info">
                  👤 User Information
                </h3>
                <div style={styles.sectionContent}>
                  <p>We encourage feedback on how to improve this website. Feedback may be e-mailed to <a href="mailto:binfo@boscosofttech.com" style={styles.emailLink}>binfo@boscosofttech.com</a>. Any feedback hence received shall be deemed to be non-confidential and Boscosoft has the right to use such information in any way we deem to be fit. Users, therefore, agree that any information provided to us shall not contain unlawful, threatening, libelous, abusive, obscene, harassing, infringing, or otherwise unlawful material or proprietary material. We shall not be held liable for any such material and we reserve the exclusive rights to remove it from the website without liability.</p>
                </div>

                {/* Governing Law */}
                <h3 style={styles.sectionTitle} id="governing-law">
                  ⚖️ Governing Law
                </h3>
                <div style={styles.sectionContent}>
                  <p>Use of this website and any dispute arising out of its use are subject to the laws of the State of Tamil Nadu in India. Any legal action or proceedings related to or arising out of these Terms and Conditions shall be settled in the courts and/or tribunals in Chennai in the State of Tamil Nadu in India.</p>
                </div>

                {/* Contact Us */}
                <div style={styles.contactInfo} id="contact">
                  <h4 style={styles.contactInfoTitle}>📧 Contact Us</h4>
                  <p>Should you have any feedback, comments, requests for technical support, or other inquiries, please contact us by email: <a href="mailto:binfo@boscosofttech.com" style={styles.emailLink}>binfo@boscosofttech.com</a></p>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-4 pt-3 border-top">
                  <p className="text-muted mb-0">
                    <small>Last updated: <span style={styles.highlightText}>June 2025</span> | © 2025 Boscosoft. All rights reserved.</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* <button 
        style={styles.scrollTopButton}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button> */}
    </div>
  );
};

export default TermsConditions;