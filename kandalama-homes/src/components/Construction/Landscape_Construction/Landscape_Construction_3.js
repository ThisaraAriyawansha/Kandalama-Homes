import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { motion } from "framer-motion"; // Import motion from framer-motion

const VisionSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl px-4 mx-auto text-center">
        <h2 className="mb-6 text-xl sm:text-3xl font-prata text-customGreen ">Bring Your Vision to Life</h2>
        <p className="mb-6 text-base sm:text-lg italic text-black font-prata leading-[2] sm:leading-[3]">
  <span className="text-xl sm:text-5xl">"</span> 
  Whether you're dreaming of a lush tropical garden, a modern minimalist landscape, or a resort-inspired outdoor oasis, 
  Kandalama Homes is here to make it a reality. Contact us today to start your journey toward a beautifully crafted landscape 
  that enhances your property and enriches your life.
  <span className="text-xl sm:text-5xl">"</span>
</p>


        
        <Link to="/contact">
            <motion.button
              className="px-8 py-3 text-sm text-white transition rounded-md hover:bg-green-700 bg-customGreen font-poppins sm:text-base md:text-lg"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            >
              Contact Us
            </motion.button>
          </Link>
          
      </div>
    </div>
  );
};

export default VisionSection;
