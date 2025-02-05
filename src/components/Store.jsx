import React, { useState } from 'react';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerRetina,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});
import { FaSearch, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import "../styles/style.css";
import 'leaflet/dist/leaflet.css';

const StoreListing = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Exact store data matching the demo
  const stores = [
    {
      id: 1,
      name: 'Urban Fashion Store',
      rating: 4.8,
      category: 'fashion',
      products: 42,
      image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/uploads/sites/118/2023/03/store-1.jpg'
    },
    {
      id: 2,
      name: 'Fresh Grocery Store',
      rating: 4.9,
      category: 'grocery',
      products: 56,
      image: 'https://demo.athemes.com/botiga-multi-vendor-el/wp-content/uploads/sites/118/2023/03/store-2.jpg'
    },
    // Add all 6 stores from the demo
  ];

  return (
    <div className="botiga-stores-page">
      {/* Hero Section */}
      <div className="store-hero">
        <div className="container">
          <h1>Find Your Favorite Stores</h1>
          <div className="store-search">
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search stores..." 
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="store-categories">
        <div className="container">
          <div className="categories-wrapper">
            <button 
              className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            <button 
              className={`category-btn ${activeCategory === 'fashion' ? 'active' : ''}`}
              onClick={() => setActiveCategory('fashion')}
            >
              Fashion
            </button>
            {/* Add other categories exactly as in demo */}
          </div>
        </div>
      </div>

      {/* Stores Grid */}
      <div className="stores-grid-wrapper">
        <div className="container">
          <div className="stores-grid">
            {stores.map(store => (
              <div className="store-card" key={store.id}>
                <div className="store-thumbnail">
                  <img 
                    src={store.image} 
                    alt={store.name} 
                    className="store-image"
                  />
                </div>
                <div className="store-info">
                  <h3 className="store-title">{store.name}</h3>
                  <div className="store-meta">
                    <div className="store-rating">
                      <FaStar className="star-icon" />
                      <span className="rating-number">{store.rating}</span>
                    </div>
                    <span className="product-count">{store.products} products</span>
                  </div>
                  <Link to="/store" className="store-link">
                    Visit Store →
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>    
      {/* Map Section */}
      <div className="store-map-section">
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />
          {vendors.map(vendor => (
            <Marker position={vendor.location} key={vendor.id}>
              <Popup>
                {vendor.name}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
    </div>
  );
};

export default StoreListing;