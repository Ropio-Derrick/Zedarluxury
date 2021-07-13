import React from "react";
import NavMenu from "./Closet/NavMenu/Navigator";
import "./Plate.css";
import Closet from "./Closet/Closet";
import Footer from "./Footer/Footer";

function Plate() {
  return (
    <div className="House">
      <Closet />
      {/* <Footer /> */}
    </div>
  );
}

export default Plate;
