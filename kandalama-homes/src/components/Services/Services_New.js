import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import Service_1 from "./Services_New_1";
import Service_2 from "./Services_New_2";
import Service_3 from "./Services_New_3";

const Service = () => {
  return (
    <div>
      <Navbar />
    <Service_1/>
    <Service_2/>
    <Service_3/>
    <Footer/>

    </div>
  );
};

export default Service;