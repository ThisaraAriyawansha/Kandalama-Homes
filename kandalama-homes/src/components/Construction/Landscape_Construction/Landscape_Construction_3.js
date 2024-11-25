import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { motion } from "framer-motion"; // Import motion from framer-motion

const VisionSection = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl px-4 mx-auto text-center">
        {/* Title with a more dramatic animation */}
        <motion.h2
          className="mb-6 text-xl sm:text-3xl font-prata text-customGreen"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 120 }}
        >
          Bring Your Vision to Life
        </motion.h2>

        {/* Paragraph with sliding and fading animation */}
        <motion.p
          className="mb-6 text-base sm:text-lg italic text-black font-prata leading-[2] sm:leading-[3]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <span className="text-xl sm:text-5xl">"</span>
          Whether you're dreaming of a lush tropical garden, a modern minimalist landscape, or a resort-inspired outdoor oasis,
          Kandalama Homes is here to make it a reality. Contact us today to start your journey toward a beautifully crafted landscape
          that enhances your property and enriches your life.
          <span className="text-xl sm:text-5xl">"</span>
        </motion.p>

        {/* Button with hover and scroll animation */}
        <Link to="/contact">
  <motion.button
    className="px-8 py-3 text-sm text-white transition rounded-md hover:bg-green-700 bg-customGreen font-poppins sm:text-base md:text-lg"
    whileHover={{
      scale: 1.05, // Subtle scale on hover
      transition: { duration: 0.3 }, // Smooth transition
    }}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }} // Fade-in with a slight delay
  >
    Contact Us
  </motion.button>
</Link>

      </div>
    </div>
  );
};

export default VisionSection;
