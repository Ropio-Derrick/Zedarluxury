import React from "react";
import NavMenu from "../NavMenu/Navigator";
import Register from "../Pages/New/Register";
import Hovered from '../Screen/HoverPop/Hovered'

function Screen() {
  return (
    <div>
      <NavMenu />
      <Hovered/>
      <Register/>
    </div>
  );
}

export default Screen;
