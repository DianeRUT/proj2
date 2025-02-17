import React, { useState, useEffect } from "react";
import { FiSearch, FiBell, FiMessageSquare, FiUser, FiMenu, FiSun,FiMoon } from "react-icons/fi";
import "../Dashboard/Dashboard_Styles/Navbar.css";

function Navbar({ isCollapsed, handleToggleSidebar }) {
  
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle" onClick={handleToggleSidebar}>
          <FiMenu />
        </button>
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="navbar-right">
        <FiMessageSquare className="nav-icon" />
        <FiBell className="nav-icon" />
        <div className="profile">
          <img src="/Diane.jpg" alt="Profile" className="profile-pic" />
        </div>
        {/* Dark Mode Toggle Button */}
        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FiSun className="sun-icon" /> : <FiMoon className="moon-icon" />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;