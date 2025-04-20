import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/children">Children</Link></li>
            <li><Link to="/sale">Sale</Link></li>
            <li><Link to="/new-arrivals">New Arrivals</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/sizing">Size Guide</Link></li>
            <li><Link to="/track-order">Track Order</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>About Us</h4>
          <ul>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/sustainability">Sustainability</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press</Link></li>
            <li><Link to="/affiliates">Affiliates</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} Fashion Boutique. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link> | 
          <Link to="/terms">Terms of Service</Link> | 
          <Link to="/accessibility">Accessibility</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer; 