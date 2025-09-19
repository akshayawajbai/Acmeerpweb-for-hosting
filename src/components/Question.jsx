import React, { useState, useEffect } from 'react';
import '../css/Question.css';
import chartImage from '../assets/img/bg/faqer.jpg';
import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const Question = () => {
  const width = useWindowWidth();
  const isMobile = width < 1100;
  const [openIndex, setOpenIndex] = useState(0); 

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Acme.erp?",
      answer: "Acme.erp is an ERP solution tailored for religious and not-for-profit organizations. It integrates a client-server Windows application with cloud-based features for comprehensive management and administration across various levels and sizes of organizations."
    },
    {
      question: "What are the main components of Acme.erp?",
      answer: "Acme.erp comprises two primary components: the Head Office Suite for generating financial reports and managing data from branch offices, and the Branch Office Suite, which includes modules for financial accounting, statutory compliance, asset management, and more."
    },
    {
      question: "Who can use Acme.erp?",
      answer: "Acme.erp is designed for users with basic computing skills, particularly targeting those without formal accounting training. It's user-friendly and suitable for members of religious and not-for-profit organizations."
    },
    {
      question: "What are the key features of Acme.erp?",
      answer: "Key features include bookkeeping, statutory and TDS compliance, asset tracking, stock management, payroll processing, donor management, and more. It also offers secure data management, affordable pricing, and 24/7 customer support."
    }
  ];

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Image */}
        <div className="col-md-6 text-center">
          <img src={chartImage} alt="Charts" className="img-fluid faq-img" />
        </div>  

        {/* Right FAQ */}
        <div className="col-md-6 faq-container">
          <div style={{ textAlign: 'center' }}>
            <h6 style={{ color: '#004868' }} className="welcome-tag">Frequently Asked Questions</h6>
            <h2 className="fw-bold" style={{ color: '#141D3' }}>
              Make Acme.erp Your Partner for Purpose-Driven Success
            </h2>
          </div>

          <div className="faq-list mt-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="faq-box mb-3"
              >
                <div
                  className={`faq-question-box d-flex justify-content-between align-items-center px-3 py-2 ${openIndex === index ? 'active' : ''}`}
                  onClick={() => toggle(index)}
                >
                  <span className="faq-title">{item.question}</span>
                  <span className="faq-icon">
                    {openIndex === index ? <RiSubtractFill /> : <FaPlus />}
                  </span>
                </div>

                {openIndex === index && (
                  <div className="faq-answer-box px-3 py-2">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
