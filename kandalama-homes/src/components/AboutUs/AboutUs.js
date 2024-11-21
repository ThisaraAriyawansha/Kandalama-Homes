import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import AboutUs_1 from "./AboutUs_1";
import AboutUs_2 from "./AboutUs_2";
import AboutUs_3 from "./AboutUs_3";


const AboutUs = () => {
  return (
    <div>
      <Navbar />
    <AboutUs_1/>
    <AboutUs_2/>
    <AboutUs_3/>
    <Footer/>

    </div>
  );
};

export default AboutUs;