import React from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/ContactUs/Contact";
import Hire from "./Components/Hire/Hire";
import Home from "./Components/Homepage/Home";
import Footer from "./Components/Parents/Footer/Footer";
// import House from "./Components/House/House";
import Header from "./Components/Parents/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <House /> */}
      <Home />
      {/* <Contact /> */}
      {/* <AboutUs /> */}
      {/* <Hire /> */}
      <Footer />
    </div>
  );
}

export default App;
