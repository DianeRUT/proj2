import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HomePage from "./components/HomePage";
import ShopPage from "./components/Shop";
import Layout from "./components/Layout";
import StoreListing from "./components/Store";
import UsestateHook from "./components/Login";
import ProductSection from "./components/ProductSection";
import ProductDetailPage from "./components/ProductDetailsPage";
import ContactUs from "./components/Contact";
import BlogGrid from "./components/Blog";
// import Content from "./components/Content";
// import MainSection from "./components/MainContent";

function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} >
          </Route>

          <Route path="/shop" element={<ShopPage />} />
          <Route path="/store" element={<StoreListing/>} />
          <Route path="/Contact" element={<ContactUs/>} />
          <Route path="/Blog" element={<BlogGrid/>} />
          <Route path="/" element={<ProductSection />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
          
          
          {/* <Route path="/about" element={<div>About Us Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/cart" element={<div>Cart Page</div>} /> */}
          </Route>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
