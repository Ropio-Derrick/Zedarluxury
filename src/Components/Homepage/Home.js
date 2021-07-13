import React from "react";
import BlocksCard from "./BlocksCard";
import BodyShow from "./BodyShow";
import Closure from "./Closure";
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
      <BodyShow />
      <BlocksCard />
      <Closure />
    </div>
  );
}

export default Home;
