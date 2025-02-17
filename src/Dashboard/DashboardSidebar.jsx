import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../Dashboard/Dashboard_Styles/Sidebar.css";
import { FiHome, FiChevronDown, FiBox, FiBell, FiShoppingCart, FiUsers, FiBarChart2, FiSettings, FiLogOut, FiBook, FiMessageSquare } from 'react-icons/fi';
import handleLogout from "./LogoutDashboard"
function Sidebar({ isCollapsed, isMobileOpen }) {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleDashboardSubMenu = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">My Dashboard</div>
      <ul className="sidebar-menu">
        <li className="sidebar-item" onClick={toggleDashboardSubMenu}>
          <div className="sidebar-item-header">
            <FiHome className="icon" />
            <span className="dash-span">Dashboard</span>
            <FiChevronDown className={`chevron ${isDashboardOpen ? 'rotate' : ''}`} />
          </div>
          <ul className={`submenu ${isDashboardOpen ? 'open' : ''}`}>
            <li className="submenu-item">
            <Link to="/dashboard">
                <FiShoppingCart className="submenu-icon" />
                <span>Shops</span>
              </Link>
            </li>
            <li className="submenu-item">
            <Link to="/vendors">
              <FiUsers className="submenu-icon" />
              <span>Vendors</span>
              </Link>
            </li>
            <li className="submenu-item">
              <FiBook className="submenu-icon" />
              <span>Blogs</span>
            </li>
            <li className="submenu-item">
              <FiMessageSquare className="submenu-icon" />
              <span>Contacts</span>
            </li>
          </ul>
        </li>
        <li className="sidebar-item">
          <Link to = "/inventory">
          <FiBox className="icon" />
          <span>Products</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <FiShoppingCart className="icon" />
          <span>Orders</span>
        </li>
        <li className="sidebar-item">
          <Link to ="/customer">
          <FiUsers className="icon" />
          <span>Customers</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to ="/notification">
          <FiBell className="icon" />
          <span>Notifications</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to= "analytics">
          <FiBarChart2 className="icon" />
          <span>Analytics</span>
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to= "settings">
          <FiSettings className="icon" />
          <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div className="sidebar-footer">
        <FiLogOut className="icon" />
        <span onClick={handleLogout}>Logout</span>
      </div>
    </div>
  );
}

export default Sidebar;
