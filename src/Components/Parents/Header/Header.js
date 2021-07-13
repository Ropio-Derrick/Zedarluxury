import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [Menu, setMenu] = useState(true);
  const [flag, setFlag] = useState(Menu);
  const [flager, setFlager] = useState(Menu);

  const ChangerMenu = () => {
    setMenu(flag);
    setFlag(!Menu);
    setFlager(!Menu);
  };

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
      <div className="Header-Right2">
        <button className="Header-Btn" onClick={ChangerMenu}>
          {!flag ? (
            <div className="Header-Right21">
              <ul>
                <a href="">Home</a>
                <a href="">Hire</a>
                <a href="">Models</a>
                <a href="">About Us</a>
                <a href="">Contact</a>
              </ul>
            </div>
          ) : (
            <h1>x</h1>
          )}
        </button>
      </div>
    </div>
  );
}

export default Header;
