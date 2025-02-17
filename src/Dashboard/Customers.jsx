import React from "react";
import "../Dashboard/Dashboard_Styles/customers.css";
import { motion } from "framer-motion";

const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", location: "USA", orders: 5, totalSpent: "$500" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", location: "UK", orders: 8, totalSpent: "$800" },
  { id: 3, name: "Michael Lee", email: "michael@example.com", location: "Canada", orders: 3, totalSpent: "$300" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", location: "Australia", orders: 7, totalSpent: "$700" },
  { id: 5, name: "Chris Brown", email: "chris@example.com", location: "Germany", orders: 6, totalSpent: "$600" },
  { id: 6, name: "Sophia Wilson", email: "sophia@example.com", location: "France", orders: 4, totalSpent: "$450" },
  { id: 7, name: "Daniel Martinez", email: "daniel@example.com", location: "Spain", orders: 10, totalSpent: "$1000" },
  { id: 8, name: "Olivia Taylor", email: "olivia@example.com", location: "Italy", orders: 9, totalSpent: "$950" },
  { id: 9, name: "William Anderson", email: "william@example.com", location: "Netherlands", orders: 2, totalSpent: "$200" },
  { id: 10, name: "Emma Thomas", email: "emma@example.com", location: "Brazil", orders: 5, totalSpent: "$550" }
];

const CustomersTable = () => {
  return (
    <div className="customers-container">
      <h2 className="customers-title">Customer List</h2>
      <motion.table
        className="customers-table"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Orders</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <motion.tr
              key={customer.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.location}</td>
              <td>{customer.orders}</td>
              <td>{customer.totalSpent}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default CustomersTable;
