import React, { useState, useEffect } from 'react';

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      // Check if user has already subscribed (using localStorage)
      const hasSubscribed = localStorage.getItem('newsletterSubscribed');
      if (!hasSubscribed) {
        setShowPopup(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Subscribed with email:', email);
      localStorage.setItem('newsletterSubscribed', 'true');
      setSubmitted(true);
      
      // Hide popup after showing success message
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="newsletter-overlay">
      <div className="newsletter-popup">
        <button className="close-btn" onClick={handleClose}>×</button>
        
        {!submitted ? (
          <>
            <h3>Get 10% Off Your First Order</h3>
            <p>Sign up for our newsletter and receive exclusive offers and updates.</p>
            
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h3>Thank You!</h3>
            <p>Your 10% discount code has been sent to your email.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterPopup; 