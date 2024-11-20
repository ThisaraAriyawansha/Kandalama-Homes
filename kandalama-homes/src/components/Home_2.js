import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center px-6 py-8 mt-20 bg-white lg:flex-row lg:px-12">
      {/* Circular Image with Scroll Animation */}
      <motion.div
        className="flex justify-center mb-6 lg:w-1/2 lg:mb-0"
        initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and translate Y by 50px
        whileInView={{ opacity: 1, y: 0 }} // Animate to opacity 1 and translate Y to 0
        transition={{ duration: 1.2 }} // Increased duration to make the animation slower (1.2s)
        viewport={{ once: true }} // Trigger animation once when the element is in view
      >
        <div className="overflow-hidden rounded-full shadow-lg w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
          <img
            src="/images/29450b5e5710977a15d5fc7ebf25b25d.jpeg"
            alt="Interior Design"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Text Content with Scroll Animation */}
      <motion.div
        className="text-center lg:w-1/2 lg:text-left"
        initial={{ opacity: 0, x: -100 }} // Start with opacity 0 and translate X by -100px
        whileInView={{ opacity: 1, x: 0 }} // Animate to opacity 1 and translate X to 0
        transition={{ duration: 1.2 }} // Increased duration to make the animation slower (1.2s)
        viewport={{ once: true }} // Trigger animation once when the element is in view
      >
<h2 className="mb-4 text-[48px] sm:text-[72px] font-prata font-[400] leading-[56px] text-customGreen">
  About Us
</h2>


        <p className="text-[14px] sm:text-[16px] font-poppins font-[300] leading-[40px] text-black">
          A construction site is a bustling environment where buildings, roads, or other
          infrastructure projects come to life. It is filled with the sights and sounds of
          progress, including heavy machinery like cranes, excavators, and bulldozers, alongside
          teams of workers in safety gear collaborating to meet project goals. Safety is a top
          priority, with protocols in place to ensure the well-being of everyone involved.
          Materials such as steel, concrete, and lumber are strategically moved and assembled as
          blueprints transform into reality. The dynamic atmosphere reflects both the complexity
          and precision required to bring architectural visions to completion.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutUs;
