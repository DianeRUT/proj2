import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../styles/style.css";

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  return (
    <section className="header-section">
      <header className="header">
        <div className="header-top">
          <div className="logo">
            <h1>Botiga</h1>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
            <button>Search</button>
          </div>
        </div>
        
        <div className="header-main">
        <div className="dropdown-container">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              Trending Categories ▼
            </button>
              <ul className={dropdownOpen ? "dropdown-menu show" : "dropdown-menu"} onClick={(e) => e.stopPropagation()}>
                <li><Link to="">Electronics</Link></li>
                <li><Link to="">Clothing</Link></li>
                <li><Link to="">Accessories</Link></li>
                <li><Link to="">Furniture</Link></li>
              </ul>
          </div>

          {/* Navigation Links */}
          <nav className="navbar">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <Link to="/shop"><li>Shop</li></Link>
              <li><Link to="/vendors">Vendors</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Phone number section */}
          <div className="phone-number">
            <span>📞 800-123-4567</span>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Header;
