import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer-House">
      <div>
        <img
          className="Footer-Image"
          src={require("../../Asssets/Images/Logo.png")}
        />
      </div>
      <div className="Footer-Blocks">
        <h1 className="Footer-Head">Pages</h1>
        <div className="Footer-box">
          <a>Home</a>
          <a>Hire</a>
          <a>Auction</a>
          <a>Gallery</a>

          <a>About</a>
          <a>Contact</a>
        </div>
      </div>
      <div className="Footer-Blocks">
        <h1 className="Footer-Head">Cars</h1>
        <div className="Footer-box">
          <a>Mercedes</a>
          <a>BMW</a>
          <a>Subaru</a>
          <a>Audi</a>

          <a>Toyota</a>
          <a>Hyundai</a>
        </div>
      </div>
      <div className="Footer-Blocks">
        <h1 className="Footer-Head">Stand</h1>
        <div className="Footer-box">
          <a>policies</a>
          <a>Terms & Condition</a>
          <a>About</a>
          <a>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
