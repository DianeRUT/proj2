import React from "react";
import "../styles/style.css";

const ShopPage = () => {
  return (
    <div className="shop-container">
      <header className="shop-header">
        <h1>Shop</h1>
        <p>Discover amazing products from different vendors.</p>
      </header>
      <section className="shop-filters">
        <input type="text" placeholder="Search products..." className="search-bar" />
        <select className="filter-category">
          <option value="all">All Categories</option>
          <option value="fashion">Fashion</option>
          <option value="electronics">Electronics</option>
        </select>
      </section>
      <section className="shop-products">
        <div className="product-card">
          <img src="/path-to-image.jpg" alt="Product" className="product-image" />
          <h2 className="product-title">Product Name</h2>
          <p className="product-price">$99.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        {/* More product cards here */}
      </section>
    </div>
  );
};

export default ShopPage;
