import React from "react";
import Home from "../../Homepage/Home";
import Hire from "../../Hire/Hire";
import ContactUs from "../../ContactUs";
import About from "../../AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="Hire" element={<Hire />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
