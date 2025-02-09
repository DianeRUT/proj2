import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AuthModal from './Login';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag, faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import "../styles/style.css";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  {/* hook */}
  const handleAuthModal = () => {
    setModal(prev => !prev);
    document.body.classList.toggle('modal-open', !modal);
  };

  return (
    <header className="site-header">
      
      {modal && <AuthModal handleClose={handleAuthModal} />}
      
      <div className="container">
        <div className="header-top">
          <div className="logo">
            <Link to="/">Botiga</Link>
          </div>
          
          <div className="header-actions">
            <div className="header-search">
              <form action="/search" method="get">
                <input type="text" placeholder="Search products..." />
                <button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>

            <div className="header-icons">
              <FontAwesomeIcon 
                className="login-icon" 
                icon={faUser} 
                onClick={handleAuthModal} 
              />
              <Link to="/wishlist" className="wishlist-icon">
                <FontAwesomeIcon icon={faHeart} />
                <span className="count">0</span>
              </Link>
              <Link to="/cart" className="cart-icon">
                <FontAwesomeIcon icon={faShoppingBag} />
                <span className="count">0</span>
              </Link>
            </div>

            <button 
              className="mobile-menu-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        
        <div className="header-main">
          <div className="dropdown-container">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              Trending Categories ▼
            </button>
            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              <li><Link to="/electronics">Electronics</Link></li>
              <li><Link to="/clothing">Clothing</Link></li>
              <li><Link to="/accessories">Accessories</Link></li>
              <li><Link to="/furniture">Furniture</Link></li>
            </ul>
          </div>

          <nav className="desktop-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/store">Vendors</Link></li>
              <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/Contact">Contact</Link></li>
             
            </ul>
          </nav>

          <div className="phone-number">
            <span className="blue-phone">📞 800-123-4567</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;