import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ShopPage from "./components/Shop";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Home />
        <Routes>
          <Route path="/shop" element={<ShopPage />} >
          {/* <Route path="/about" element={<div>About Us Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/cart" element={<div>Cart Page</div>} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
