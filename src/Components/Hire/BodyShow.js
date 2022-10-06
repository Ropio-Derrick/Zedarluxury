import React from "react";
// import { TireRepair } from "@mui/icons-material";

function BodyShow() {
  return (
    <div className="Body-House">
      <div className="BodyShow-OverLay">
        <div className="BS-Left">
          <h1 className="BS-Text">
            We Are <br />
            Here For You
          </h1>
          <p className="BS-Text1">
            Our offices are always open for you.
            <br />
            Reach out to our customer support for any help.
          </p>
          <div className="BS-Btnbox">
            <button className="BS-Button">I</button>
          </div>
        </div>
        <div className="BS-Right">
          <img
            className="BS-Image"
            alt=""
            src={require("../Asssets/Images/color.png")}
          />
        </div>
      </div>
    </div>
  );
}

export default BodyShow;
