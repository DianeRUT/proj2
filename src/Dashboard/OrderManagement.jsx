import React from "react";
import "../Dashboard/Dashboard_Styles/orderManagement.css";

const orders = [
  { id: 101, customer: "Alice Johnson", date: "2025-02-01", total: "$120.00", status: "Delivered" },
  { id: 102, customer: "Michael Brown", date: "2025-02-02", total: "$75.00", status: "Pending" },
  { id: 103, customer: "Sarah Davis", date: "2025-02-03", total: "$50.00", status: "Shipped" },
];

const OrderManagement = () => {
  return (
    <div>
      <h2>Order Management</h2>
      <p>Track and manage your orders.</p>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManagement;
