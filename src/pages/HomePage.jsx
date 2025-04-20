import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewsletterPopup from '../components/NewsletterPopup';
import BackToTop from '../components/BackToTop';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <section className="hero">
          <h2>Stylish Fashion For Everyone</h2>
          <p>Discover the latest trends in clothing for men, women, and children.</p>
          <Link to="/new-arrivals" className="cta-button">Shop Now</Link>
        </section>
        
        <section className="featured">
          <h3>New Arrivals</h3>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Summer Dress</h4>
              <p>$59.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Casual Shirt</h4>
              <p>$39.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/5691570/pexels-photo-5691570.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Kids T-Shirt</h4>
              <p>$19.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/6046183/pexels-photo-6046183.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Denim Jacket</h4>
              <p>$79.99</p>
              <button>Add to Cart</button>
            </div>
          </div>
        </section>
        
        {/* Men's Clothing Section */}
        <section className="category-section men-section">
          <h3>Men's Clothing</h3>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Men's Casual Shirt</h4>
              <p>$45.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Slim Fit Jeans</h4>
              <p>$59.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Leather Jacket</h4>
              <p>$129.99</p>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="view-all">
            <Link to="/men">View All Men's Clothing</Link>
          </div>
        </section>
        
        {/* Women's Clothing Section */}
        <section className="category-section women-section">
          <h3>Women's Clothing</h3>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Floral Dress</h4>
              <p>$65.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/6765164/pexels-photo-6765164.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Blouse</h4>
              <p>$42.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/7691224/pexels-photo-7691224.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Skinny Jeans</h4>
              <p>$55.99</p>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="view-all">
            <Link to="/women">View All Women's Clothing</Link>
          </div>
        </section>
        
        {/* Children's Clothing Section */}
        <section className="category-section children-section">
          <h3>Children's Clothing</h3>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/5693891/pexels-photo-5693891.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Kids Hoodie</h4>
              <p>$29.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Girls Dress</h4>
              <p>$34.99</p>
              <button>Add to Cart</button>
            </div>
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Boys Pants</h4>
              <p>$24.99</p>
              <button>Add to Cart</button>
            </div>
          </div>
          <div className="view-all">
            <Link to="/children">View All Children's Clothing</Link>
          </div>
        </section>
        
        {/* Special Offers Section */}
        <section className="special-offers">
          <h3>Special Offers</h3>
          <div className="offer-banners">
            <div className="offer-banner">
              <div className="offer-content">
                <h4>Summer Sale</h4>
                <p>Up to 50% off summer essentials</p>
                <Link to="/sale" className="offer-link">Shop Now</Link>
              </div>
            </div>
            <div className="offer-banner">
              <div className="offer-content">
                <h4>Free Shipping</h4>
                <p>On all orders over $50</p>
                <Link to="/shipping" className="offer-link">Learn More</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <NewsletterPopup />
      <BackToTop />
    </div>
  );
};

export default HomePage; 