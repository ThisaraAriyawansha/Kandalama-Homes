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
          <p className="absolute top-[565px] left-[102px] font-light text-white text-lg leading-relaxed z-20 w-[1086px]">
            A construction site thumbnail could feature a busy worksite with cranes, workers in safety
            <br />
            gear, and partially built structures. Workers in safety gear, and partially built structures.
          </p>

          {/* Main Title */}
          <h1 className="absolute top-[650px] left-[102px] text-[120px] font-milonga font-[400] tracking-wide text-shadow-xl z-20">
            Kandalama
          </h1>

          {/* Subtitle */}
          <h2 className="absolute top-[820px] left-[102px] text-[100px] font-megrim font-[500] leading-tight text-shadow-xl z-30">
            Homes
          </h2>
        </div>
      </section>
    </div>
  );
};

export default KandalamaHomes;
