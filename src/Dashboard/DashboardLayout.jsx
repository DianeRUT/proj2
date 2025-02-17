import React, { useState, useEffect } from 'react';
import Navbar from './DashboardNavbar';
import Sidebar from './DashboardSidebar';
import { Outlet } from "react-router-dom";
import "./Dashboard_Styles/Layout.css"; 

function DashboardLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const handleToggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setIsMobileOpen(prev => !prev);
    } else {
    setIsCollapsed(prev => !prev);
    console.log("Sidebar isCollapsed:", !isCollapsed);
    }
  };
// Close sidebar when window resizes
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobileOpen(false);
    }
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }
}, [darkMode]);

  return (
    <div className={`dashboard-layout ${darkMode ? "dark-mode" : ""}`}>
      <Navbar isCollapsed={isCollapsed} handleToggleSidebar={handleToggleSidebar} />
      
      <div className="dashboard-main">
        <Sidebar isCollapsed={isCollapsed} isMobileOpen={isMobileOpen} />
        
        {/* Main Content */}
        <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
