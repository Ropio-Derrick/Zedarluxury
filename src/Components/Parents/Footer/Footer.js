import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="Footer-House">
        <div className="Footer-Blocks">
          <h1 className="Footer-Head">Menu</h1>
          <div className="Footer-box">
            <a>Home</a>
            <a>Hire</a>
            <a>Models</a>
            <a>About</a>
            <a>Contact</a>
          </div>
        </div>
        <div className="Footer-Blocks">
          <h1 className="Footer-Head">Services</h1>
          <div className="Footer-box">
            <a>Clients</a>
            <a>Book Ride</a>
            <a>Test Ride</a>

            <a>Inquires</a>
            <a>Garage</a>
          </div>
        </div>
        <div className="Footer-Blocks1">
          <img
            className="Footer-Image"
            src={require("../../Asssets/Images/Logo.png")}
          />
          <h1 className="WWD-Text-1251">
            Zedar <span>Luxury</span>
          </h1>
        </div>
        <div className="Footer-Blocks">
          <h1 className="Footer-Head">Menu</h1>
          <div className="Footer-box">
            <a>Home</a>
            <a>Hire</a>
            <a>Models</a>
            <a>About</a>
            <a>Contact</a>
          </div>
        </div>
        <div className="Footer-Blocks">
          <h1 className="Footer-Head">Stand</h1>
          <div className="Footer-box">
            <a>policies</a>
            <a>
              Terms <br /> & Condition
            </a>
            <a>About</a>
            <a>Contact</a>
          </div>
        </div>
      </div>
      <div className="Footer-Closure">
        <h1 className="footer-Ct">All Rights Reserved</h1>
      </div>
    </div>
  );
}

export default Footer;
