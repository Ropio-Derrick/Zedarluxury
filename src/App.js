import React from "react";
import "./App.css";
import About from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/Contact";
import Hire from "./Components/Hire/Hire";
import Home from "./Components/Homepage/Home";
import Footer from "./Components/Parents/Footer/Footer";
// import House from "./Components/House/House";
import Header from "./Components/Parents/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="Hire" element={<Hire />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="About" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
