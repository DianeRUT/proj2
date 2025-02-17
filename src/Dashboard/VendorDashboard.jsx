import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faBox, faChartLine, faCog } from "@fortawesome/free-solid-svg-icons";
import "../Dashboard/Dashboard_Styles/VendorDashboard.css"
const VendorDashboard = () => {
  return (
    <div className="vendor-dashboard">
      <div className="dashboard-header">
        <h1>Welcome, Vendor!</h1>
        <p>Here’s an overview of your store performance.</p>
      </div>

      <div className="dashboard-overview">
        <div className="overview-card">
          <FontAwesomeIcon icon={faStore} className="card-icon" />
          <h2>6 Stores</h2>
          <p>Managed Stores</p>
        </div>
        <div className="overview-card">
          <FontAwesomeIcon icon={faBox} className="card-icon" />
          <h2>120 Orders</h2>
          <p>Total Orders</p>
        </div>
        <div className="overview-card">
          <FontAwesomeIcon icon={faChartLine} className="card-icon" />
          <h2>$45,000</h2>
          <p>Total Sales</p>
        </div>
      </div>

      <div className="dashboard-sections">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
        <Link to="/storeManagements">
          <button className="action-btn">
            
            <FontAwesomeIcon icon={faStore} /> Manage Stores
          </button>
          </Link>
          <Link to ="/orders">
          <button className="action-btn">
            <FontAwesomeIcon icon={faBox} /> View Orders
          </button>
          </Link>
          <Link to ="/analytics">
          <button className="action-btn">
            <FontAwesomeIcon icon={faChartLine} /> Analytics
          </button>
          </Link>
          <Link to = "/settings">
          <button className="action-btn">
            <FontAwesomeIcon icon={faCog} /> Settings
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
