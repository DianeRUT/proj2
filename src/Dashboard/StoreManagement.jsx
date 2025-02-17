import React from "react";
import "../Dashboard/Dashboard_Styles/storeManagement.css";

const stores = [
  { id: 1, name: "John Doe's Store", location: "New York, US", status: "Active" },
  { id: 2, name: "Jessica's Boutique", location: "San Francisco, US", status: "Pending" },
  { id: 3, name: "Santa Monica Market", location: "Los Angeles, US", status: "Active" },
];

const StoreManagement = () => {
  return (
    <div>
      <h2>Store Management</h2>
      <p>Manage your stores. You can view, edit, or deactivate your stores.</p>
      <table className="store-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Store Name</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store, index) => (
            <tr key={store.id}>
              <td>{index + 1}</td>
              <td>{store.name}</td>
              <td>{store.location}</td>
              <td>{store.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreManagement;
