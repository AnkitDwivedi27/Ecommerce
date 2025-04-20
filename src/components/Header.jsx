import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">
          <h1>Fashion Boutique</h1>
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          
          <li className="dropdown">
            <Link to="/men">Men</Link>
            <ul className="dropdown-menu">
              <li><Link to="/men?category=shirts">Shirts</Link></li>
              <li><Link to="/men?category=pants">Pants</Link></li>
              <li><Link to="/men?category=shoes">Shoes</Link></li>
              <li><Link to="/men?category=accessories">Accessories</Link></li>
            </ul>
          </li>
          
          <li className="dropdown">
            <Link to="/women">Women</Link>
            <ul className="dropdown-menu">
              <li><Link to="/women?category=dresses">Dresses</Link></li>
              <li><Link to="/women?category=tops">Tops</Link></li>
              <li><Link to="/women?category=bottoms">Bottoms</Link></li>
              <li><Link to="/women?category=shoes">Shoes</Link></li>
              <li><Link to="/women?category=accessories">Accessories</Link></li>
            </ul>
          </li>
          
          <li className="dropdown">
            <Link to="/children">Children</Link>
            <ul className="dropdown-menu">
              <li><Link to="/children?category=boys">Boys</Link></li>
              <li><Link to="/children?category=girls">Girls</Link></li>
              <li><Link to="/children?category=baby">Baby</Link></li>
              <li><Link to="/children?category=shoes">Shoes</Link></li>
            </ul>
          </li>
          
          <li><Link to="/sale">Sale</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Link to="/cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="cart-count">0</span>
        </Link>
      </div>
    </header>
  );
};

export default Header; 