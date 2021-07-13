import React from "react";
import "./AboutUs.css";
import BodyShow from "./BodyShow";
import PickView from "./PickView";
import WhatWeDo from "./WhatWeDo";

function AboutUs() {
  return (
    <div className="About-House">
      <PickView />
      <BodyShow />
      <WhatWeDo/>
    </div>
  );
}

export default AboutUs;
