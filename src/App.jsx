import React, {useState} from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import ShopPage from "./components/Shop";
import Layout from "./components/Layout";
import StoreListing from "./components/Store";
import UsestateHook from "./components/Login";
import ContactUs from "./components/Contact";
import BlogGrid from "./components/Blog";
import HomeProduct from "./components/HomeProduct";
import Dashboardlayout from "./Dashboard/Dashboardlayout";
import DashboardView from "./Dashboard/DashboardView";
import VendorDashboard from "./Dashboard/VendorDashboard";
import StoreManagement from "./Dashboard/StoreManagement";
import OrderManagement from "./Dashboard/OrderManagement";
import SettingsManagent from "./Dashboard/Settings";
import AnalyticsManagement from "./Dashboard/Analytics";
import ProductInventory from "./Dashboard/ProductInventory";
import NotificationSettings from "./Dashboard/Notifications";
import CustomersAnalytics from "./Dashboard/Customers"
// import Content from "./components/Content";
// import MainSection from "./components/MainContent";

function App() {
  return (
    <BrowserRouter>

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/store" element={<StoreListing/>} />
          <Route path="/Contact" element={<ContactUs/>} />
          <Route path="/onSubmit" element={<HomeProduct/>} />
          <Route path="/Blog" element={<BlogGrid/>} />
           </Route>
           
           <Route path="" element={<Dashboardlayout/>}> 
           <Route path="/dashboard" index element={<DashboardView/>} />
           <Route path="/vendors" index element={<VendorDashboard/>} />
           <Route path="/storeManagements" index element={<StoreManagement/>} />
           <Route path="/orders" index element={<OrderManagement/>} />
           <Route path="/analytics" index element={<AnalyticsManagement/>} />
           <Route path="/settings" index element={<SettingsManagent/>} />
           <Route path="/inventory" index element={<ProductInventory/>} />
           <Route path="/notification" index element={<NotificationSettings/>} />
           <Route path="/customer" index element={<CustomersAnalytics/>} />
           </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;