import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import Navbar from "./components/NavBar";
import Home_1 from "./components/Home_1";
import Home_2 from "./components/Home_2";
import Home_3 from "./components/Home_3";
import Home_4 from "./components/Home_4";
import Home_5 from "./components/Home_5";
import Home_6 from "./components/Home_6";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home_1" element={<Home_1 />} />
        <Route path="/home_2" element={<Home_2 />} />
        <Route path="/home_3" element={<Home_3 />} />
        <Route path="/home_4" element={<Home_4 />} />
        <Route path="/home_5" element={<Home_5 />} />
        <Route path="/home_6" element={<Home_6 />} />
        <Route path="/footer" element={<Footer />} />

        



      </Routes>
    </Router>
  );
}


export default App;
