import React, { useState } from "react";
import {GoArrowSwitch} from "react-icons/go";
import { FaStar, FaRegStar, FaShippingFast, FaStoreAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "../styles/ProductSection.css";

import ProductCard from "./ProductCard";
import bottle from "../assets/product-water-bottle-420x420.jpg.webp";
import alexa from "../assets/product-alexa-420x420.jpg.webp";
import headset from "../assets/product-wireless-headset-420x420.jpg.webp";
import lotion from "../assets/product-category-1.jpg.webp";
import sports from "../assets/product-category-2.jpg.webp";
import computer from "../assets/product-category-3.jpg.webp";
import electronics from "../assets/product-category-8-1.jpg.webp";
import watch from "../assets/product-category-8-1.jpg.webp";
import clothes from "../assets/product-category-8-1.jpg.webp";
import headset2 from "../assets/image.webp";
import camera from "../assets/camera1.webp";
import store1 from "../assets/store1.webp";
import store2 from "../assets/store2.webp";
import store3 from "../assets/store3.webp";
import store4 from "../assets/store4.webp";
import store5 from "../assets/store5.webp";
import store6 from "../assets/store6.webp";
import instagram1 from "../assets/insta1.webp";
import instagram2 from "../assets/insta2.webp";
import instagram3 from "../assets/insta3.webp";
import instagram4 from "../assets/insta4.webp";
import instagram5 from "../assets/insta5.webp";
import instagram6 from "../assets/insta6.webp";

  const ProductSection = () => {
    const categories = [
      {id:1, name: "Body Lotion", image: lotion },
      { id:2, name: "Sports", image: sports },
      { name: "Computer Gadget", image: computer },
      { name: "Electronics", image: electronics },
      { name: "Watch", image: watch },
      { name: "Women Clothes", image: clothes },
    ];
  
    const products = [
      { name: "All in One Bottle", price: "$22.00 - $35.00", image: bottle, rating: 4.5 },
      { name: "Amazon Alexa", price: "$40.00 - $60.00", image: alexa, rating: 4 },
      { name: "Headset Gamer Legion", price: "$22.00 - $35.00", image: headset, rating: 3.5 },
    ];
  
    const vendors = [
      { name: "Santa Monica’s Store", location: "New York, NY", image: store1 },
      { name: "Josh Doe’s Store", location: "New York, NY", image: store2 },
      { name: "Digital Good’s Store", location: "New York, NY", image: store3},
      { name: "Jessica's Store", location: "New York, NY", image: store4 },
      { name: "The Glass Store", location: "New York, NY", image: store5 },
      { name: "John Doe's Store", location: "New York, NY", image: store6}
    ];
    
    const whyChooseUs = [
        { icon: <GoArrowSwitch />, title: "Easy Returns", description: "Our return policy is simple and that is why customers love our shop." },
        { icon: <FaShippingFast />, title: "Customer Support", description: "Our return policy is simple and that is why customers lov.e our shop" },
        { icon: <FaStoreAlt />, title: "High Quality", description: "Our return policy is simple and that is why customers love our shop." },
      
      ];
  
      const exploreProducts = [
        { image: bottle, price: "$22.00 - $35.00", name: "Smart Watch",rating: 4.5 },
        { image: alexa, price: "$40.00 - $60.00", name: "Wireless Headphones",rating: 4 },
        { image: headset, price: "$22.00 - $35.00", name: "Portable Speaker",rating: 3.5 },
        { image: headset2 , price: "$22.00 - $55.00", name: "Headset Gamer Legion Plus",rating: 5},
        { image: watch , price: "$22.00 - $33.00", name: "JDoe’s Styling Watch",rating: 5 },
        { image: camera , price: "$22.00 - $55.00", name: "Jessi Cam Recorder",rating: 5},
      ];
      
      const instagramImages = [
        instagram1, instagram2, instagram3, instagram4, instagram5, instagram6
      ];
    

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? "filled" : ""}`}>
        {i < Math.floor(rating) ? <FaStar /> : <FaRegStar />}
      </span>
    ));
  };
  return(

    <div className="explore-products">
      <h2 className="section-title">Popular Categories</h2>
      <div className="cards-grid1">
        {categories.map((category, index) => (     
          <div className="card" key={index}>
            <img src={category.image} alt={category.name} className="category-image" />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <h2 className="section-title">New Arrival Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>

      <button className="shop-now-btn">SHOP NOW</button>
    {/* Our Vendor List Section */}
    <div className="vendor-list">
        <h2 className="section-title">Our Vendor List</h2>
        <div className="vendors-grid">
          {vendors.map((vendor, index) => (
            <div className="vendor-card" key={index}>
              <img src={vendor.image} alt={vendor.name} />
              <p>{vendor.name} <button className="vendor-button">&gt;</button></p>
              
              <span>{vendor.location}</span>
              
            </div>
          ))}
        </div>
        <button className="see-all-vendors">SEE ALL VENDORS</button>
      </div>

      {/* Why People Choose Us Section */}
      <div className="why-choose-us">
        <h2 className="section-title">Why People Choose Us</h2>
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
<div className="our-products">
<h2 className="section-title">Explore Our Products</h2>
      <div className="exploreProducts-grid">
      {exploreProducts.slice(0, 6).map((product, index) => (
    <ProductCard key={index} product={product} />
  ))}
      </div>
      </div>
      <button className="shop-now-btn">SHOP NOW</button>

{/* Follow Us on Instagram Section */}
<div className="follow-instagram">
 <h2 className="section-title">Follow Us on @Instagram</h2>
 <div className="instagram-carousel">
   {instagramImages.map((image, index) => (
     <div className="insta-card" key={index}>
       <img src={`${image}`} alt={`Instagram post ${index + 1}`} />
     </div>
   ))}
 </div>
</div>
</div>
    
  );
};

export default ProductSection;
