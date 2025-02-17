import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FiShoppingCart, FiBarChart2, FiCalendar, FiMessageSquare, FiCheckSquare, FiTrash2  } from 'react-icons/fi';
import "../Dashboard/Dashboard_Styles/Shops.css"; 
import SalesBarChart from "./BiChart";
import LineChartComponent from "./LineChart";
import { FaChartLine, FaChartBar, FaChartArea, FaChartPie } from "react-icons/fa";


const salesData = [
  { id: 1, customer: "John Doe", product: "Laptop", amount: "$1200", status: "Completed" },
  { id: 2, customer: "Jane Smith", product: "Smartphone", amount: "$800", status: "Pending" },
  { id: 3, customer: "Mike Johnson", product: "Headphones", amount: "$150", status: "Completed" },
  { id: 4, customer: "Emma Watson", product: "Camera", amount: "$500", status: "Processing" },
]

function DashboardView() {

  const [selectedRows, setSelectedRows] = useState([]);

  // Select or Deselect All Rows
  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedRows(salesData.map((sale) => sale.id));
    } else {
      setSelectedRows([]);
    }
  };


  // Select or Deselect a Single Row
  const handleRowSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

 const [date, setDate] = useState(new Date());

  return (
    <div className="shops-container">
      <h2>Shops</h2>
      <div className="dashboard-stats">
      <div className="stat-card">
        <div className="stat-icon"><FaChartLine /></div>
        <div className="stat-info">
          <h4>Total Sales</h4>
          <p>$50,000</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon"><FaChartBar /></div>
        <div className="stat-info">
          <h4>New Customers</h4>
          <p>1,245</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon"><FaChartArea /></div>
        <div className="stat-info">
          <h4>Orders</h4>
          <p>2,589</p>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon"><FaChartPie /></div>
        <div className="stat-info">
          <h4>Revenue</h4>
          <p>$78,940</p>
        </div>
      </div>
    </div>

    
      

      {/* Worldwide Sales Section */}
      <div className="sales-containers">
      <div className="section worldwide-sales">
        <h3><FiBarChart2 /> Worldwide Sales</h3>
        <p><SalesBarChart /></p> {/* Insert SalesBarChart inside the <p> tag */}
      </div>

      {/* Sales and Revenue Section */}
      <div className="section sales-revenue">
        <h3><FiShoppingCart /> Sales and Revenue</h3>
        <p><LineChartComponent /></p>
      </div>
      </div>

 {/* recent sales */}

 <div className="sales-container">
      <h2>Recent Sales</h2>
      <div className="sales-table-container">
        <table className="sales-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedRows.length === salesData.length}
                  onChange={handleSelectAll}
                />
              </th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((sale) => (
              <tr key={sale.id} className={selectedRows.includes(sale.id) ? "selected" : ""}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(sale.id)}
                    onChange={() => handleRowSelect(sale.id)}
                  />
                </td>
                <td>{sale.customer}</td>
                <td>{sale.product}</td>
                <td>{sale.amount}</td>
                <td className={`status ${sale.status.toLowerCase()}`}>{sale.status}</td>
                <td>
                  <button className="view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="show-all-btn">Show All</button>
    </div>

      <div className="extras-section">
      <h2>Dashboard Extras</h2>

      <div className="extras-container">
      {/* Messages Section */}
      <div className="extras-box messages-box">
        <h3><FiMessageSquare /> Messages</h3>
        <div className="message">
          <div className="avatar">A</div>
          <div className="message-content">
            <h4>Alice <span>10:30 AM</span></h4>
            <p>New order placed</p>
          </div>
        </div>
        <div className="message">
          <div className="avatar">B</div>
          <div className="message-content">
            <h4>Bob <span>1:15 PM</span></h4>
            <p>Stock update needed</p>
          </div>
        </div>
        <button className="show-all">Show All</button>
      </div>

      {/* Calendar Section */}
      <div className="extras-box calendar-box">
        <h3><FiCalendar /> Calendar</h3>
        <Calendar onChange={setDate} value={date} />
      </div>

      {/* To-Do List Section */}
      <div className="extras-box todo-box">
  <h3><FiCheckSquare /> To-Do List</h3>
  <ul className="todo-list">
    <li>
      <input type="checkbox" id="task1" />
      <label htmlFor="task1">Update stock inventory</label>
    </li>
    <li>
      <input type="checkbox" id="task2" />
      <label htmlFor="task2">Prepare sales report</label>
    </li>
    <li>
      <input type="checkbox" id="task3" />
      <label htmlFor="task3">Schedule marketing campaign</label>
    </li>
  </ul>
  <button className="show-all">View All</button>
</div>
    </div>
      </div>
      </div>
  );
}

export default DashboardView;
