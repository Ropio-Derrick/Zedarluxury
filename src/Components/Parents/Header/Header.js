import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header-House">
      <div className="Header-Left">
        <img
          className="Header-Logo"
          src={require("../../Asssets/Images/logo512.png")}
        />
      </div>
      <div className="Header-Right">
        <ul>
          <a href="">Home</a>
          <a href="">Hire</a>
          <a href="">Auction</a>
          <a href="">Gallery</a>
          <a href="">About Us</a>
          <a href="">Contact</a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
