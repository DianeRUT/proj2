import React from "react"
import { Link } from "react-router-dom";
import '../styles/CategorySection.css';

const CategorySection = () => {
  return (
    <div className="category-section">
      <div className="category-list">
        <ul>
          <li>Electronics</li>
          <li>Computer Gadget</li>
          <li>Fashion</li>
          <li>Body Lotion</li>
          <li>Sports</li>
          <li>Woman Clothes</li>
          <li>Shoes</li>
          <li>Watches</li>
        </ul>
      </div>
      <div className="category-content">
        <h2 style={{ fontFamily: 'Overlock Display, cursive', fontSize: '38px' }}>Explore our latest and greatest electronics</h2>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default CategorySection;
