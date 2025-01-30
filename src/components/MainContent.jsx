import React from "react";
import { FaShippingFast, FaHeadset, FaShieldAlt, FaDollarSign, FaSteamSymbol, FaStoreAlt } from "react-icons/fa"; 
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import lotion from '../assets/product-category-1.jpg.webp'
import sports from '../assets/product-category-2.jpg.webp'
import computer from '../assets/product-category-3.jpg.webp'
import electronics from '../assets/product-category-8-1.jpg.webp'
import  watch from '../assets/product-category-8-1.jpg.webp'
import clothes from '../assets/product-category-8-1.jpg.webp'

import "../styles/style.css";

const categories = [
  { name: "Body Lotion", image: lotion },
  { name: "Sports", image: sports },
  { name: "Computer Gadget", image: computer },
  { name: "Electronics", image: electronics },
  { name: "Watch", image: watch },
  { name: "Women Clothes", image: clothes },
];

const newArrivals = [
    { name: "All in One Bottle", price: "$22.00 - $35.00", image: "bottle.jpg", rating: 4.5 },
    { name: "Amazon Alexa", price: "$40.00 - $60.00", image: "alexa.jpg", rating: 4 },
    { name: "Headset Gamer Legion", price: "$22.00 - $35.00", image: "headset.jpg", rating: 3.5 }
  ];  
  
const vendors = [
  { name: "Santa Monica’s Store", location: "New York, NY", image: "store1.jpg" },
  { name: "Josh Doe’s Store", location: "New York, NY", image: "store2.jpg" },
  { name: "Digital Good’s Store", location: "New York, NY", image: "store3.jpg" },
  { name: "Jessica’s Store", location: "New York, NY", image: "store4.jpg" },
  { name: "The Glass Store", location: "New York, NY", image: "store5.jpg" },
  { name: "John Doe’s Store", location: "New York, NY", image: "store6.jpg" },
];

const whyChooseUs = [
    { icon: <GoArrowSwitch />, title: "Easy Returns", description: "Our return policy is simple and that is why customers love our shop." },
    { icon: <FaShippingFast />, title: "Customer Support", description: "Our return policy is simple and that is why customers lov.e our shop" },
    { icon: <FaStoreAlt />, title: "High Quality", description: "Our return policy is simple and that is why customers love our shop." },
  
  ];
  
  const exploreProducts = [
    { image: "product1.jpg", name: "Smart Watch" },
    { image: "product2.jpg", name: "Wireless Headphones" },
    { image: "product3.jpg", name: "Portable Speaker" },
    { image: "product4.jpg", name: "Fitness Tracker" }
  ];
  
  const instagramImages = [
    "insta1.jpg", "insta2.jpg", "insta3.jpg", "insta4.jpg", "insta5.jpg"
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="star" />); // Full Star
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="star" />); // Half Star
      } else {
        stars.push(<FaRegStar key={i} className="star" />); // Empty Star
      }
    }
    return stars;
  };
  

function MainSection() {
  return (
    <section className="main-container">

      {/* Popular Categories Section */}

      <div className="popular-categories">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          {categories.map((item) => (
            <div className="category-card" key={item}>
              <img src={item.image} alt={item.name}  className="gallery-image"/>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="new-arrivals">
        <h2>New Arrival Products</h2>
        <div className="products-grid">
          {newArrivals.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={`/assets/${product.image}`} alt={product.name} />
              <p>{product.name}</p>
              <div className="stars">{renderStars(product.rating)}</div> {/* Dynamically Render Stars */}
  <span>{product.price}</span>
</div>
          ))}
        </div>
        <button className="shop-now">SHOP NOW</button>
      </div>
      {/* Our Vendor List Section */}
      <div className="vendor-list">
        <h2>Our Vendor List</h2>
        <div className="vendors-grid">
          {vendors.map((vendor, index) => (
            <div className="vendor-card" key={index}>
              <img src={`/assets/${vendor.image}`} alt={vendor.name} />
              <p>{vendor.name}</p>
              <span>{vendor.location}</span>
              <button className="vendor-button">&gt;</button>
            </div>
          ))}
        </div>
        <button className="see-all-vendors">SEE ALL VENDORS</button>
      </div>

      <div className="why-choose-us">
        <h2>Why People Choose Us</h2>
        <div className="choose-grid">
          {whyChooseUs.map((item, index) => (
            <div className="choose-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Our Products Section */}
      <div className="explore-products">
        <h2>Explore Our Products</h2>
        <div className="products-grid">
          {exploreProducts.map((product, index) => (
            <div className="product-card" key={index}>
              <img src={`/assets/${product.image}`} alt={product.name} />
              <p>{product.name}</p>
            </div>
          ))}
        </div>
        <button className="shop-now">SHOP NOW</button>
      </div>

      {/* Follow Us on Instagram Section */}
      <div className="follow-instagram">
        <h2>Follow Us on @Instagram</h2>
        <div className="instagram-carousel">
          {instagramImages.map((image, index) => (
            <div className="insta-card" key={index}>
              <img src={`/assets/${image}`} alt={`Instagram post ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainSection;
