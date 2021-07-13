import React from "react";
import "./App.css";
import Home from "./Components/Homepage/Home";
// import House from "./Components/House/House";
import Header from "./Components/Parents/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <House /> */}
      <Home />
    </div>
  );
}

export default App;
