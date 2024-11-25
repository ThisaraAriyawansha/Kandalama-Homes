import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutUs/AboutUs";
import Navbar from "./components/NavBar";
import ContactUs from "./components/ContactUs/ContactUs";
import Project from "./components/Project/Project";
import VillaConstruction from "./components/Construction/Villa_Construction/Villa_Construction";
import CabanaConstruction from "./components/Construction/Cabana_Construction/Cabana_Construction";
import LandscapeConstruction from "./components/Construction/Landscape_Construction/Landscape_Construction";
import ContactUs_1 from "./components/ContactUs/ContactUs_1";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/villaConstruction" element={<VillaConstruction />} />
        <Route path="/cabanaConstruction" element={<CabanaConstruction />} />
        <Route path="/landscapeConstruction" element={<LandscapeConstruction />} />
        <Route path="/landscapeConstruction" element={<LandscapeConstruction />} />
        <Route path="/contactUs_1" element={<ContactUs_1 />} />




      </Routes>
    </Router>
  );
}


export default App;
