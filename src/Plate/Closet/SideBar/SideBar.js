import {
  Check,
  ExitToApp,
  Message,
  NotificationAdd,
  People,
  PersonAdd,
  PersonPin,
  PersonTwoTone,
  Settings,
} from "@mui/icons-material";
import React from "react";
import "./SideBar.css";

function SideBar() {
  // const [Button, setButton] = useState(false);
  // const handleButtonActions = () => {
  //   setButton(!false);
  // };

  return (
    <div className="House_Sidebar">
      <div className="Top_Sidebar">
        <ul className="List_ManagerA">
          <h1 className="Title_Sidebar">Clients </h1>
          <a className="Clicker_Btn">
            New <PersonAdd />
          </a>
          <a className="Clicker_Btn">
            {" "}
            Waiting <PersonPin />{" "}
          </a>
          <a className="Clicker_Btn">
            {" "}
            Potential <PersonTwoTone />
          </a>
          <a className="Clicker_Btn">
            {" "}
            Cleared <Check />{" "}
          </a>
          <a className="Clicker_Btn">
            {" "}
            Reached <People />{" "}
          </a>
        </ul>
      </div>

      <div className="spacer" />

      <div className="Bottom_Sidebar">
        <ul className="List_ManagerB">
          <h1 className="Title_Sidebar">Company </h1>
          <a className="Clicker_Btn">
            {" "}
            Notification <NotificationAdd />{" "}
          </a>
          <a className="Clicker_Btn">
            {" "}
            Mails <Message />{" "}
          </a>
          <a className="Clicker_Btn">
            {" "}
            Settings <Settings />{" "}
          </a>
          <a className="Clicker_Btn">
            {" "}
            Logout <ExitToApp />{" "}
          </a>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
