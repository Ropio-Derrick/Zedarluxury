import React from "react";
import "./BlocksCard.css";

function BlocksCard() {
  return (
    <div>
      <h1 className="WWD-Text-123">
        Our <span>Pride</span>
      </h1>
      <div className="Block-House">
        <div className="Block-Box">
          <h1>Luxury</h1>
        </div>
        <div className="Block-Box">
          <h1>Classical</h1>
        </div>
        <div className="Block-Box">
          <h1>Cool</h1>
        </div>
        <div className="Block-Box">
          <h1>Sporty</h1>
        </div>
      </div>
    </div>
  );
}

export default BlocksCard;
