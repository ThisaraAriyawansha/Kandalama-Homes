import React from "react";
import Navbar from "../../NavBar";
import Footer from "../../Footer";
import Villa_Construction_1 from "./Villa_Construction_1";
import Villa_Construction_2 from "./Villa_Construction_2";


const Villa = () => {
  return (
    <div>
    <Navbar />
     <Villa_Construction_1/>
     <Villa_Construction_2/>
    <Footer/>

    </div>
  );
};

export default Villa;