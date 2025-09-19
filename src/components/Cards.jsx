import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import '../css/Cards.css';

import Service1 from '../assets/img/icon/service_1_1.svg';
import Service2 from '../assets/img/icon/service_1_2.svg';
import Service3 from '../assets/img/icon/service_1_3.svg';

const cardData = [
  {
    icon: <img src={Service1} className="icon-svg" />,
    title: 'User-Friendly by Design',
    text: `No accounting degree? No problem. Acme.erp is built for everyday users with basic computer skills. Get started quickly and become confident in managing your finances—and without the complexity.`,
  },
  {
    icon: <img src={Service2} className="icon-svg" />,
    title: 'Instant and Insightful Reporting',
    text: `Generate real-time reports with just a few clicks. Track income and expenses and fund allocations effortlessly—so you can make informed decisions and stay accountable to your stakeholders.`,
  },
  {
    icon: <img src={Service3} className="icon-svg" />,
    title: 'Save Time and Focus on Impact',
    text: `Say goodbye to hours lost in spreadsheets. Acme.erp streamlines your financial tasks, freeing up valuable time for what truly matters—serving your community and fulfilling your mission.`,
  },
  {
    icon: <img src={Service1} className="icon-svg" />,
    title: 'Enterprise-Grade Security',
    text: `Your data is safe with us. Acme.erp uses encrypted passwords and unique user IDs to ensure that only authorized personnel can access sensitive financial information.`,
  },
  {
    icon: <img src={Service2} className="icon-svg" />,
    title: 'Affordable and Scalable Pricing',
    text: `Get powerful features without the hefty price tag. Acme.erp offers one of the lowest Total Cost of Ownership (TCO) and highest ROI in the sector—making it ideal for organizations of any size and including colleges and small institutions.`,
  },
  {
    icon: <img src={Service3} className="icon-svg" />,
    title: '24/7 Expert Support',
    text: `We’re with you every step of the way. Our dedicated support team is available around the clock to resolve issues and answer questions and ensure your operations run smoothly.`,
  },
];

const Cards = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollToCard((currentIndex + 1) % cardData.length);
      setCurrentIndex((prev) => (prev + 1) % cardData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollToCard = (index) => {
    const container = scrollRef.current;
    if (container) {
      const card = container.children[index];
      const offset = card.offsetLeft - container.offsetWidth / 2 + card.offsetWidth / 2;
      container.scrollTo({
        left: offset,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + cardData.length) % cardData.length;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % cardData.length;
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  return (
    <div className="container py-5 cards-container relative">
      <div className="text-center mb-5">
        <p style={{ color: "#004868" }} className="welcome-tag fw-semibold">Why Choose Acme.erp</p>
        <h2 className="hero-title">Purpose-Built <span style={{ color: "#004867" }}> Accounting for <br />
          Purpose-Driven </span>Organizations</h2>
        <p className="benifit-subtitle">Acme.erp is more than just software—it’s a partner in your mission. <br />
          Whether you're running an NGO, a non-profit or a faith-based institution, here’s how Acme.erp empowers your team:</p>
      </div>

      {/* Arrow Right */}
      <div className="acme-cards">
        <button className="acme-cards__arrow acme-cards__arrow--prev" onClick={handlePrev} aria-label="Previous">
          <FaArrowLeft />
        </button>

        <div className="cards-scroll-wrapper" ref={scrollRef}>
          {cardData.map((card, idx) => (
            <div key={idx} className="card text-center card-hover">
              <div className="card-body">
                <span className="card-icon">
                  <span className="icon-inner">{card.icon}</span>
                </span>
                <h5 className="card-title fw-semibold"><span>{card.title}</span></h5>
                <p className="card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Left */}
        <button className="acme-cards__arrow acme-cards__arrow--next" onClick={handleNext} aria-label="Next">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Cards;
