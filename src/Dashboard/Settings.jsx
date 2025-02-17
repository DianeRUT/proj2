import React, { useState } from "react";
import "../Dashboard/Dashboard_Styles/Settings.css"

const SettingsManagent = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123 456 7890",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    // Add your save logic here
    alert("Profile settings saved!");
  };

  return (
    <div className="settings-container">
      <h2 className="settings-title">Settings</h2>

      <div className="settings-section">
        <h3>Profile Settings</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleInputChange}
          />
        </div>
        <button className="save-btn" onClick={handleSave}>
          Save Changes
        </button>
      </div>

      <div className="settings-section">
        <h3>Store Settings</h3>
        <div className="form-group">
          <label>Store Name</label>
          <input type="text" placeholder="Enter your store name" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="Enter store description"></textarea>
        </div>
        <button className="save-btn">Update Store</button>
      </div>
    </div>
  );
};

export default SettingsManagent;
