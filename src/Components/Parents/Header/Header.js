import React, { useState } from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header-House">
      <div className="Header-Left">
        <h1 className="WWD-Text-125">
          Zedar <span>Luxury</span>
        </h1>
      </div>
      <div className="Header-Right">
        <ul>
          <a href="">Home</a>
          <a href="">Hire</a>
          <a href="">Models</a>
          <a href="">About Us</a>
          <a href="">Contact</a>
          
        </ul>
      </div>
    </div>
  );
}

export default Header;
