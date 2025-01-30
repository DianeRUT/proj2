import React from "react"
import { Link } from "react-router-dom";
import "../styles/style.css"

function Content(){
    return(
<div className="main-content">
<aside className="side-menu">
  <ul>
    <li><Link to="/products/electronics">Electronics</Link></li>
    <li><Link to="/products/computer-gadget">Computer Gadget</Link></li>
    <li><Link to="/products/fashion">Fashion</Link></li>
    <li><Link to="/products/body-lotion">Body Lotion</Link></li>
    <li><Link to="/products/sports">Sports</Link></li>
    <li><Link to="/products/women-clothes">Women Clothes</Link></li>
    <li><Link to="/products/shoes">Shoes</Link></li>
    <li><Link to="/products/watches">Watches</Link></li>
  </ul>
</aside>


<div className="content">
  <h2>Explore our latest and greatest electronics</h2>
  <button className="shop-now">SHOP NOW</button>
</div>

</div>

    )
};

export default Content;
