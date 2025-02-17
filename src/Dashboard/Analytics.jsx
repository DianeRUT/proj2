import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";
import "../Dashboard/Dashboard_Styles/analytics.css";

const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 2000 },
  { name: "Apr", sales: 2780 },
  { name: "May", sales: 3500 },
];

const revenueData = [
  { name: "Jan", revenue: 8000 },
  { name: "Feb", revenue: 7000 },
  { name: "Mar", revenue: 6000 },
  { name: "Apr", revenue: 7500 },
  { name: "May", revenue: 8200 },
];

const orderDistribution = [
  { name: "Electronics", value: 40 },
  { name: "Clothing", value: 25 },
  { name: "Home & Kitchen", value: 20 },
  { name: "Others", value: 15 },
];

const customerGrowth = [
  { name: "Jan", customers: 500 },
  { name: "Feb", customers: 700 },
  { name: "Mar", customers: 650 },
  { name: "Apr", customers: 800 },
  { name: "May", customers: 900 },
];

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];

const AnalyticsManagement = () => {
  return (
    <div className="analytics-container">
      <h2 className="analytics-title">Analytics Overview</h2>
      <p className="analytics-description">Monitor your store's performance with detailed insights.</p>
      
      <div className="chart-grid two-rows">
        <div className="chart-row">
          <div className="chart">
            <h3 className="chart-title">Sales Overview</h3>
            <BarChart width={400} height={300} data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" stroke="#333" />
              <YAxis stroke="#333" />
              <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "5px" }} />
              <Bar dataKey="sales" fill="#36A2EB" radius={[5, 5, 0, 0]} animationDuration={1000} />
            </BarChart>
          </div>

          <div className="chart">
            <h3 className="chart-title">Revenue Trends</h3>
            <BarChart width={400} height={300} data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" stroke="#333" />
              <YAxis stroke="#333" />
              <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "5px" }} />
              <Bar dataKey="revenue" fill="#FF6384" radius={[5, 5, 0, 0]} animationDuration={1000} />
            </BarChart>
          </div>
        </div>

        <div className="chart-row">
          <div className="chart">
            <h3 className="chart-title">Order Distribution</h3>
            <PieChart width={400} height={300}>
              <Pie data={orderDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} animationDuration={1000}>
                {orderDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "5px" }} />
              <Legend />
            </PieChart>
          </div>

          <div className="chart">
            <h3 className="chart-title">Customer Growth</h3>
            <BarChart width={400} height={300} data={customerGrowth}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" stroke="#333" />
              <YAxis stroke="#333" />
              <Tooltip contentStyle={{ backgroundColor: "#fff", borderRadius: "5px" }} />
              <Bar dataKey="customers" fill="#FFCE56" radius={[5, 5, 0, 0]} animationDuration={1000} />
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsManagement;
