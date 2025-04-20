import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const MenPage = () => {
  return (
    <div className="page men-page">
      <Header />
      <main className="main-content">
        <div className="page-banner men-banner">
          <div className="banner-content">
            <h1>Men's Collection</h1>
            <p>Discover our latest styles for men</p>
          </div>
        </div>
        
        <section className="products-section">
          <div className="filter-bar">
            <div className="filter-options">
              <select name="category" id="category">
                <option value="">All Categories</option>
                <option value="shirts">Shirts</option>
                <option value="pants">Pants</option>
                <option value="shoes">Shoes</option>
                <option value="accessories">Accessories</option>
              </select>
              
              <select name="sort" id="sort">
                <option value="newest">Newest</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
            
            <div className="view-options">
              <span className="products-count">24 Products</span>
            </div>
          </div>
          
          <div className="products-grid men-products">
            {/* Product Item 1 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Casual Shirt</h4>
              <p>$45.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 2 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/2343661/pexels-photo-2343661.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Slim Fit Jeans</h4>
              <p>$59.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 3 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Leather Jacket</h4>
              <p>$129.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 4 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/6311392/pexels-photo-6311392.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Button-Down Shirt</h4>
              <p>$49.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 5 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Summer T-Shirt</h4>
              <p>$24.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 6 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Formal Shoes</h4>
              <p>$89.99</p>
              <button>Add to Cart</button>
            </div>
          </div>
          
          <div className="pagination">
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next ›</button>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default MenPage; 