import React from "react";
import { Link } from "react-router-dom";
import "./index.scss"

function Navbar() {
  return (
    <div className="navbar">
      <p className="navbar_logo">Floral Studio</p>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/addpage"}>Add Page</Link></li>
        <li>Portfolio</li>
        <li>Pricing</li>
        <li>Contacts</li>
      </ul>
    </div>
  );
}

export default Navbar;
