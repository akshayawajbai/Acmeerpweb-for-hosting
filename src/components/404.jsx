import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ textAlign: 'center', padding: '100px 20px' }}>
    <h1 style={{ fontSize: '5rem', marginBottom: '20px' }}>404</h1>
    <h2 style={{ marginBottom: '20px' }}>Page Not Found</h2>
    <p style={{ marginBottom: '30px' }}>
      Sorry, the page you are looking for does not exist.
    </p>
    <Link to="/" style={{ color: '#007bff', textDecoration: 'underline', fontSize: '1.2rem' }}>
      Go to Home
    </Link>
  </div>
);

export default NotFound; 