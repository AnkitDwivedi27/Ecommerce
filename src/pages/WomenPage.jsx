import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const WomenPage = () => {
  return (
    <div className="page women-page">
      <Header />
      <main className="main-content">
        <div className="page-banner women-banner">
          <div className="banner-content">
            <h1>Women's Collection</h1>
            <p>Discover our latest styles for women</p>
          </div>
        </div>
        
        <section className="products-section">
          <div className="filter-bar">
            <div className="filter-options">
              <select name="category" id="category">
                <option value="">All Categories</option>
                <option value="dresses">Dresses</option>
                <option value="tops">Tops</option>
                <option value="bottoms">Bottoms</option>
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
          
          <div className="products-grid women-products">
            {/* Product Item 1 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Floral Dress</h4>
              <p>$65.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 2 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/6765164/pexels-photo-6765164.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Blouse</h4>
              <p>$42.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 3 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/7691224/pexels-photo-7691224.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Skinny Jeans</h4>
              <p>$55.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 4 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/6311673/pexels-photo-6311673.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Summer Dress</h4>
              <p>$59.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 5 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/7691981/pexels-photo-7691981.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Casual Top</h4>
              <p>$38.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 6 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Elegant Heels</h4>
              <p>$79.99</p>
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

export default WomenPage; 