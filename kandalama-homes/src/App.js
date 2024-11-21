import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutUs/AboutUs";
import Navbar from "./components/NavBar";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />

        <Route path="/about" element={<AboutPage />} />

        



      </Routes>
    </Router>
  );
}


export default App;
