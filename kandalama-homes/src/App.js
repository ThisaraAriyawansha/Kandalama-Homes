import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import Navbar from "./components/NavBar";
import Home_1 from "./components/Home_1";
import Home_2 from "./components/Home_2";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home_1" element={<Home_1 />} />
        <Route path="/home_2" element={<Home_2 />} />


        



      </Routes>
    </Router>
  );
}


export default App;
