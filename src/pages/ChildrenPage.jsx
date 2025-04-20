import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const ChildrenPage = () => {
  return (
    <div className="page children-page">
      <Header />
      <main className="main-content">
        <div className="page-banner children-banner">
          <div className="banner-content">
            <h1>Children's Collection</h1>
            <p>Fun and comfortable styles for kids</p>
          </div>
        </div>
        
        <section className="products-section">
          <div className="filter-bar">
            <div className="filter-options">
              <select name="category" id="category">
                <option value="">All Categories</option>
                <option value="boys">Boys</option>
                <option value="girls">Girls</option>
                <option value="baby">Baby</option>
                <option value="shoes">Shoes</option>
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
          
          <div className="products-grid children-products">
            {/* Product Item 1 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/5693891/pexels-photo-5693891.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Kids Hoodie</h4>
              <p>$29.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 2 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Girls Dress</h4>
              <p>$34.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 3 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Boys Pants</h4>
              <p>$24.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 4 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Kids T-Shirt</h4>
              <p>$19.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 5 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/6147013/pexels-photo-6147013.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Baby Onesie</h4>
              <p>$15.99</p>
              <button>Add to Cart</button>
            </div>
            
            {/* Product Item 6 */}
            <div className="product-card">
              <div className="product-image" style={{backgroundImage: "url('https://images.pexels.com/photos/6540927/pexels-photo-6540927.jpeg?auto=compress&cs=tinysrgb&w=800')"}}></div>
              <h4>Kids Sneakers</h4>
              <p>$39.99</p>
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

export default ChildrenPage; 