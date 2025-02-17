import React, { useEffect, useState } from "react";
import "../styles/style.css";
import { FaTh, FaList } from "react-icons/fa";
import bottle from "../assets/product-water-bottle-420x420.jpg.webp";
import alexa from "../assets/product-alexa-420x420.jpg.webp";
import headset from "../assets/product-wireless-headset-420x420.jpg.webp";
import watch from "../assets/product-watch-2-420x420.jpg.webp";
import camera from "../assets/camera1.webp";
import mouse from "../assets/product-category-3.jpg.webp";

// ⭐⭐⭐⭐⭐ Star Rating Component
const StarRating = ({ rating }) => {
  const maxStars = 5;
  return (
    <div className="star-container">
      <p className="stars">
        {"★".repeat(rating)}
        {"☆".repeat(maxStars - rating)}
      </p>
    </div>
  );
};

const ShopPage = () => {
  const [view, setView] = useState("grid");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "All In One Bottle",
          price: "$22.00 – $55.00",
          image: bottle,
          rating: 3,
          colors: ["#8B4513", "#D2B48C", "#808080"],
        },
        {
          id: 2,
          name: "Amazon Alexa",
          price: "$49.00 – $69.00",
          image: alexa,
          rating: 5,
          colors: ["#000000", "#FFFFFF", "#4169E1"],
        },
        {
          id: 3,
          name: "Headset Gamer Legion",
          price: "$22.00 – $55.00",
          image: headset,
          rating: 4,
          colors: ["#FF0000", "#000000", "#008000"],
        },
        {
          id: 4,
          name: "Smart Watch Pro",
          price: "$99.00",
          image: watch,
          rating: 5,
        },
        {
          id: 5,
          name: "Camera",
          price: "$59.00",
          image: camera,
          rating: 4,
        },
        {
          id: 6,
          name: "Mouse",
          price: "$120.00",
          image: mouse,
          rating: 5,
        },
      ]);
    }, 1000);
  }, []);

  return (
    <div className="shop-container">
      <header className="shop-header">
        <h1>Shop</h1>
      </header>

      <main className="shop-main">
        {/* Sidebar */}
        <aside className="sidebar1">
          <h3>Categories</h3>
          <ul>
            <li>Body Lotion (1)</li>
            <li>Computer Gadget (3)</li>
            <li>Electronics (5)</li>
            <li>Fashion (3)</li>
            <li>General (1)</li>
            <li>Shoes (2)</li>
            <li>Sports (3)</li>
            <li>Watch (1)</li>
            <li>Woman Clothes (3)</li>
          </ul>
          <h3>Color</h3>
          <div className="color-filters">
            <span className="color brown"></span>
            <span className="color beige"></span>
            <span className="color gray"></span>
            <span className="color white"></span>
          </div>

          <h3>Rating</h3>
          <div className="ratings">
            <StarRating rating={5} /> <span>(8)</span>
            <StarRating rating={4} /> <span>(4)</span>
            <StarRating rating={3} /> <span>(1)</span>
          </div>

          <h3>Price</h3>
          <input type="range" min="0" max="100" />
          <div className="price-range">
            <span>$0</span>
            <span>$100</span>
          </div>
        </aside>

        {/* Products Section */}
        <section className="products">
          <div className="products-header">
            <span>Showing 1-6 of {products.length} results</span>
            <div className="sort-view-container">
              <div className="sort-container">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort">
                  <option value="default">Default Sorting</option>
                  <option value="popularity">Popularity</option>
                  <option value="rating">Average Rating</option>
                  <option value="latest">Latest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
              {/* View Toggle Buttons */}
              <div className="view-icons">
                <button
                  className={view === "grid" ? "active" : ""}
                  onClick={() => setView("grid")}
                >
                  <FaTh />
                </button>
                <button
                  className={view === "list" ? "active" : ""}
                  onClick={() => setView("list")}
                >
                  <FaList />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className={`product-grid ${view === "list" ? "list-view" : ""}`}>
            {products?.length > 0 ? (
              products.map((product) => (
                <div key={product.id} className="product">
                  <img src={product.image} alt={product.name} />
                  <div className="product-info">
                    <h4>{product.name}</h4>
                    <StarRating rating={product.rating} />
                    <p className="price">{product.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShopPage;
