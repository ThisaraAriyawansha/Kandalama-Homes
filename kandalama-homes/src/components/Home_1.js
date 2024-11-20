import React from "react";
import "./Home_1.css";

const KandalamaHomes = () => {
  return (
    <div className="min-h-screen overflow-hidden text-white bg-white border-4 border-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-full">
        {/* Background Image */}
        <img
          src="/images/Rectangle 1.png"
          alt="Kandalama Homes"
          className="object-cover w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col px-4 text-left items-start justify-start bg-gradient-to-r from-black/70 to-[#542C01]/40 rounded-[47px] z-10">
          {/* Description Text */}
          <p className="mx-auto  font-light text-white md:text-xl w-[80%] max-w-[1086px] absolute top-[365px] left-[102px] text-base leading-relaxed z-20">
            A construction site thumbnail could feature a busy worksite with cranes, workers in safety
            <br />
            gear, and partially built structures. workers in safety gear, and partially built structures.
          </p>

          {/* Main Title */}
            <h1 className="my-4 text-6xl tracking-wide text-white md:text-7xl absolute top-[450px] left-[102px] text-[150px] font-milonga font-[400] text-shadow-xl z-20">
            Kandalama
            </h1>



          {/* Subtitle */}
          <h2 className="text-4xl text-white md:text-5xl absolute top-[600px] left-[102px] text-[96px] font-megrim font-[500] leading-tight text-shadow-xl z-30">
            Homes
            </h2>

        </div>
      </section>
    </div>
  );
};

export default KandalamaHomes;
