import React, { useState } from 'react';
import '../css/blogpost.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaCalendar } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import image1 from '../assets/img/blog/accounting.jpg';
import image2 from '../assets/img/blog/finance.jpg';
import image3 from '../assets/img/blog/finance01.jpg';
import image4 from '../assets/img/bg/aboutus.jpg';

const blogPosts = [
  {
    image: image2,
    date: '19, 2024',
    title: 'The Importance of Financial Management Systems for Nonprofits...',
    category: 'FINANCE',
    link: '/finance'
  },
  {
    image: image1,
    date: '15, 2024',
    title: 'Easy Ways to Manage Accounting for Non-profits, NGOs, and Religious Institutions',
    category: 'ACCOUNTING',
    link: '/accounting'
  },
  {
    image: image3,
    date: '16, 2024',
    title: 'Transform Your Finances with Acme.erp: A Simple Path to Success',
    category: 'FINANCE',
    link: '/FMS-blog'
  },
  // {
  //   image: image4,
  //   date: '17, 2024',
  //   title: 'How Cloud Accounting Helps Nonprofits Stay Transparent and Efficient',
  //   category: 'FINANCE',
  // }
];

const BlogPost = () => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const visiblePosts = blogPosts.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < blogPosts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleViewAll = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'hero' } });
    } else {
      const el = document.getElementById('hero');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="blog-section container py-4">
      <div className="section-text d-flex justify-content-center align-items-center">
        <p className="mb-1 welcome-tag">Recent blog post</p>
        <h2 className="section-subtitle m-0">View Our Latest Blog Insights</h2>
      </div>
      <div className="section-header d-flex justify-content-between align-items-center flex-wrap mb-4">

        {/* <div className="view-all-wrapper mt-3 mt-md-0">
          <button className="btn btn-outline-primary view-all-btn" onClick={handleViewAll}>
            VIEW ALL POSTS
          </button>
        </div> */}
      </div>

      <div className="blog-slider d-flex align-items-center justify-content-center">
        <div className="blog-arrow blog-arrow--prev" onClick={handlePrev} aria-label="Previous">
          <FaArrowLeftLong />
        </div>
        <div className="row flex-nowrap overflow-hidden">
          {visiblePosts.map((post, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="blog-card">
                <div className="image-placeholder">
                  <img src={post.image} alt="Blog" />
                </div>
                <div className="category-tag">{post.category}</div>
                <div className="blog-date">
                  <FaCalendar style={{ color: "#004868" }} /> {post.date}
                </div>
                <Link to={post.link || '#'} className="blog-title text-decoration-none">
                  <h4 className="blog-title">{post.title}</h4>
                </Link>
                <Link to={post.link || '#'} className="read-more">
                  Read Details <span>&gt;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="blog-arrow blog-arrow--next" onClick={handleNext} aria-label="Next">
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
