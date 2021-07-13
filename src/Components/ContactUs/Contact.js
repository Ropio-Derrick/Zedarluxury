import React from "react";
import PickShow from "./PickShow";
import "./Contact.css";
import "../Homepage/PickView.css";
import LandContShow from "./LandContShow";
import ContText from "./ContText";

function Contact() {
  return (
    <div className="Cont-House">
      <PickShow />
      <LandContShow />
      <ContText />
    </div>
  );
}

export default Contact;
