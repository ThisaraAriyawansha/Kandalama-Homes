import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home_1.css";

const KandalamaHomes = () => {
  // State to check the screen size
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  // Update screen size state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // 768px as the breakpoint for mobile/desktop
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          {isDesktop && (
            <motion.p
              className="absolute top-[565px] left-[102px] font-light text-white text-lg leading-relaxed z-20 w-[1086px]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              A construction site thumbnail could feature a busy worksite with cranes, workers in safety
              <br />
              gear, and partially built structures. Workers in safety gear, and partially built structures.
            </motion.p>
          )}

          {/* Main Title */}
          {isDesktop && (
            <motion.h1
              className="absolute top-[650px] left-[102px] text-[120px] font-milonga font-[400] tracking-wide text-shadow-xl z-20"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1.2 }}
            >
              Kandalama
            </motion.h1>
          )}

          {/* Subtitle */}
          {isDesktop && (
            <motion.h2
              className="absolute top-[820px] left-[102px] text-[100px] font-megrim font-[500] leading-tight text-shadow-xl z-30"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1.2 }}
            >
              Homes
            </motion.h2>
          )}

          {/* For mobile or smaller screens, display static text without animations */}
          {!isDesktop && (
            <>
              <p className="absolute top-[565px] left-[102px] font-light text-white text-lg leading-relaxed z-20 w-[1086px]">
                A construction site thumbnail could feature a busy worksite with cranes, workers in safety
                <br />
                gear, and partially built structures. Workers in safety gear, and partially built structures.
              </p>
              <h1 className="absolute top-[650px] left-[102px] text-[120px] font-milonga font-[400] tracking-wide text-shadow-xl z-20">
                Kandalama
              </h1>
              <h2 className="absolute top-[820px] left-[102px] text-[100px] font-megrim font-[500] leading-tight text-shadow-xl z-30">
                Homes
              </h2>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default KandalamaHomes;