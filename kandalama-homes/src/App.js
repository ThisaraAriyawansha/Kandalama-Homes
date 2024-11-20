import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import Navbar from "./components/NavBar";
import Home_1 from "./components/Home_1";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/home_1" element={<Home_1 />} />


        



      </Routes>
    </Router>
  );
}


export default App;
