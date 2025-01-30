import React from "react";

function Navbar(){
    return (
<>
<div className="navbar">
<ul className="nav-link">
  <li><a href="#about" className="nav-item">About</a></li>
  <li><a href="#projects" className="nav-item">Projects</a></li>
  <li><a href="#services" className="nav-item">Services</a></li>
  <li><a href="#messages" className="nav-item">Contact</a></li>

</ul>
</div>
</>
    )
}
export default Navbar;