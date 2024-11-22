import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import "./AboutUs_1.css";

const AboutUs = () => {
  return (
    <div className="relative h-screen rounded-[47px] bg-white border-4 border-white about-container">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover rounded-[47px] bg-image"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/2f4e/4d4a/e73c50733a360df02fb7720ed6359427?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SqgTg5uboxfk~xlf0Sk~8JdN-jjMbsFHuu3B3vWaa875XzDbM6klXHQAd3PAE~ZYY4QJDODqUqYj2astIgs4R12iHTlZKzi3NCNmRHTdzlKDXzrH83vhBbJEY3mB-L4XaIGlkN6vCB58Y6AltitGpO5ZW9FA71S2XOpj7zsyLT~JTO-Zd5O1jtX0721RE5pGE3144GJ7Q8m8PDgVpuMVaAsUOmdCeyo7aCVGKvgkTmREcrBpTio5wZ4S8iVKoG-QrDeswh62h~WsP3LKTp37tQtwVMSRMXy3La1IhQtU9rzcZoBoWj26eXINi-7pS0M3Powegdf2MOXCQibTHg0Rag__')`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 rounded-[47px] z-10 custom-gradient"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-4xl p-8">
          <div className="flex items-center justify-center">
            {/* Left Section - Title with Animation */}
            <motion.div
              className="w-[450px] h-[450px] absolute top-[170px] left-[-200px] bg-white rounded-full flex items-center justify-center about-circle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
            <motion.h1
            className="text-8xl text-center absolute top-[170px] left-[230px] font-prata about-title"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            >
            <span className="text-black about-title-span">ABO</span>
            <span className="text-white about-title-span">UT</span>
            <br />
            <span className="text-black about-title-span">U</span>
            <span className="text-white about-title-span">S</span>
            </motion.h1>

            </motion.div>

            {/* Right Section - Text with Animation */}
            <motion.div
              className="w-2/3 text-black absolute top-[350px] left-[700px] right-10 bottom-10 about-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <p className="text-lg leading-8 text-white font-poppins">
              Welcome to Kandalama Homes, your trusted partner in building dreams and <br/>
              creating exceptional living spaces in Sri Lanka. With a passion for excellence and a <br/>
              commitment to quality, we specialize in landscape architecture and construction that<br/>
               blends innovation with timeless design. At Kandalama Homes, we take pride in<br/>
                transforming visions into reality, delivering tailor-made solutions that reflect your<br/>
                 unique style and needs. Our expert team ensures every project is crafted with precision,<br/>
                  sustainability, and a dedication to enhancing the natural beauty of our island home. <br/>
                  Discover the art of construction with Kandalama Homes – where your dream home <br/>begins.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
