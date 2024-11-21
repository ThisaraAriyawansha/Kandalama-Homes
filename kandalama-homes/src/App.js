import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutUs/AboutUs";
import Navbar from "./components/NavBar";
import ContactUs from "./components/ContactUs/ContactUs";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
        



      </Routes>
    </Router>
  );
}


export default App;
