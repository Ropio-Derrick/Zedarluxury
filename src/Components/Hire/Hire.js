import React from "react";
import BodyShow from "./BodyShow";
import "./Hire.css";
import PickView from "./PickView";
import WhatWeDo from "./WhatWeDo";

function Hire() {
  return (
    <div className="Hire-House">
      <PickView />
      <BodyShow />
      <WhatWeDo />
    </div>
  );
}

export default Hire;
