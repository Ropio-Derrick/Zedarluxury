import React from "react";
import "./Home.css";
import LandShow from "./LandShow";
import PickView from "./PickView";
import WhatWeDo from "./WhatWeDo";

function Home() {
  return (
    <div className="Home-House">
      <PickView />
      <LandShow />
      <WhatWeDo />
    </div>
  );
}

export default Home;
