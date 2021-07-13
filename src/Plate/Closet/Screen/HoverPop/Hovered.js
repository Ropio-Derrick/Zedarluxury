import React, { useState } from "react";
import {
  Home,
  MessageOutlined,
  Call,
  Instagram,
  Facebook,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import "./Hovered.css";

function Hovered() {
  const [spacer, setSpacer] = useState("Spacer");
  const [flag, setFlag] = useState(false);

  const handleSpacer = () => {
    setFlag(!false);
  };

  return (
    <div className="Hover">
      <div className="Hover-Locker">
        <span>
          <div className="Hover-Handler">
            <a href="#">
              <LinkedIn className="Hover-Icon1" />
            </a>
            <a href="#">
              <Facebook className="Hover-Icon1" />{" "}
            </a>
            <a href="#">
              <Twitter className="Hover-Icon1" />{" "}
            </a>
            <a href="#">
              <Instagram className="Hover-Icon1" />{" "}
            </a>
          </div>
        </span>
        <span>
          <Home className="Hover-Icon" />
        </span>
      </div>
      <div className="Hover-Locker">
        <span>
          <h1 className="Hover-Text">Chat</h1>
        </span>
        <span>
          <MessageOutlined className="Hover-Icon" />
        </span>
      </div>
      <div className="Hover-Locker">
        <span>
          <h1 className="Hover-Text" onClick={handleSpacer}>
            {flag ? spacer : <h1>Default</h1>}
          </h1>
        </span>
        <span>
          <Call className="Hover-Icon" />
        </span>
      </div>
    </div>
  );
}

export default Hovered;
