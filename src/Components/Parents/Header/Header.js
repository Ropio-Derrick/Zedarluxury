import React, { useState } from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";

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
        <nav>
          <ul>
            <a>
              <Link to="/">Home</Link>
            </a>
            <a>
              <Link to="/hire">Hire</Link>
            </a>
            <a>
              <Link to="/Models">Models</Link>
            </a>
            <a>
              <Link to="/About">About</Link>
            </a>
            <a>
              <Link to="/ContactUs">Contact</Link>
            </a>
          </ul>
        </nav>

        <Outlet />
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
