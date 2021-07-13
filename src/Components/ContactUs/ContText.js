import React from "react";
import "./ContText.css";
import Form from "./Form";

function ContText() {
  return (
    <div className="ContText-House">
      <div className="ContText-Left">
        <Form />
      </div>
      <div className="ContText-Right">
        <div className="Cont-Lay">
          <h1 className="Cont-LayText1">Location :</h1>
          <h1 className="Cont-LayText2">Nairobi, Kenya</h1>
        </div>
        <div className="Cont-Lay">
          <h1 className="Cont-LayText1">Address :</h1>
          <h1 className="Cont-LayText2">89North eA</h1>
        </div>
        <div className="Cont-Lay">
          <h1 className="Cont-LayText1">Tel No :</h1>
          <h1 className="Cont-LayText2">+254768047900</h1>
        </div>
        <div className="Cont-Lay">
          <h1 className="Cont-LayText1">Email :</h1>
          <h1 className="Cont-LayText2">info@zedarluxury.com</h1>
        </div>
        <div className="Cont-Lay">
          <h1 className="Cont-LayText1">More :</h1>
          <h1 className="Cont-LayText2">About Us</h1>
        </div>
      </div>
    </div>
  );
}

export default ContText;
