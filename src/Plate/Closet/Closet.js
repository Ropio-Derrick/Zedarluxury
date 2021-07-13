import React from "react";
import Screen from "./Screen/Screen";
import SideBar from "./SideBar/SideBar";
import "./Closet.css";

function Closet() {
  return (
    <div className="House_Closet">
      <SideBar />

      <Screen />
    </div>
  );
}

export default Closet;
