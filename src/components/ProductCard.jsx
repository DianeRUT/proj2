import React, { useState } from "react";
import Modal from "react-modal";
import { FaStar, FaRegStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "../styles/ProductSection.css";
import { Link } from 'react-router-dom';
Modal.setAppElement("#root");


const ProductCard = ({ product }) => {
    const [liked, setLiked] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const renderStars = (rating) => {
      return Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`star ${i < Math.floor(rating) ? "filled" : ""}`}>
          {i < Math.floor(rating) ? <FaStar /> : <FaRegStar />}
        </span>
      ));
    };

  return (
    <div className="product-item">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <div className="overlay">
        <Link to={`/product/${product.id}`} className="select-options-btn">Select Options</Link>
          <button className="quick-overview-btn" onClick={() => setIsModalOpen(true)}>Quick Overview</button>
        </div>
        <div
          className={`heart-icon-wrapper ${liked ? "liked" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          <CiHeart className={`heart-icon`} />
        </div>
      </div>
      <p className="product-name">{product.name}</p>
      <p className="product-price">{product.price}</p>
      <div className="rating">{renderStars(product.rating)}</div>
      <div className="color-options">
        <span className="color brown"></span>
        <span className="color beige"></span>
        <span className="color gray"></span>
        <span className="color white"></span>
      </div>

 {/* Quick View Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-header">
          <h2>{product.name}</h2>
          <button className="close-btn" onClick={() => setIsModalOpen(false)}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <img src={product.image} alt={product.name} className="modal-image" />
          <p className="product-price">{product.price}</p>
          <p className="product-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            dignissim auctor quam nec dapibus.
          </p>
          <div className="color-options">
            <span className="color brown"></span>
            <span className="color beige"></span>
            <span className="color gray"></span>
            <span className="color white"></span>
          </div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </Modal>

    </div>
  );
};

export default ProductCard;
