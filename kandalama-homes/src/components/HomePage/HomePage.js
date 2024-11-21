import React from "react";
import Navbar from "../NavBar";
import Home_1 from "./Home_1";
import Home_2 from "./Home_2";
import Home_3 from "./Home_3";
import Home_4 from "./Home_4";
import Home_5 from "./Home_5";
import Home_6 from "./Home_6";
import Footer from "../Footer";




const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home_1/>
      <Home_2/>
      <Home_3/>
      <Home_4/>
      <Home_5/>
      <Home_6/>
    <Footer/>

    </div>
  );
};

export default HomePage;
