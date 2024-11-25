import React from "react";
import Slider from "react-slick"; // Import the Slider component
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';




const services = [
  {
    title: "Villa Construction",
    image: "/images/29450b5e5710977a15d5fc7ebf25b25d.jpeg",
  },
  {
    title: "Cabana Design",
    image: "/images/Rectangle 12.jpg",
  },
  {
    title: "Landscape Architecture",
    image: "/images/Rectangle 12 (1).jpg",
  },
];

const TeamSection = () => {
  // Slick slider settings for mobile view
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show one service at a time
    slidesToScroll: 1,
  };


  const navigate = useNavigate(); // This should be inside the component

  const handleCardClick = (title) => {
    if (title === 'Villa Construction') {
      navigate('/villaConstruction');
    } else if (title === 'Cabana Design') {
      navigate('/cabanaConstruction');
    } else if (title === 'Landscape Architecture') {
      navigate('/landscapeConstruction');
    }
  };

  return (
    <div
    className="bg-center bg-cover border-4 border-white rounded-[47px] sm:h-[75vh] md:h-[100vh] h-[85vh]"
    style={{
        backgroundImage:
          "url('/images/Rectangle 7.jpg')",
      }}
    >
      <div className="w-full h-full rounded-[47px] " style={{ backgroundColor: "rgba(0, 90, 78, 0.49)" }}>
        <div className="container p-20 mx-auto text-center text-white">
          <h2 className="mb-4 text-2xl font-bold text-center sm:text-left sm:text-4xl font-quando">
          OUR SERVICES
          </h2>

          {/* Mobile view: Show slider */}
          <div className="md:hidden">
      <Slider {...settings}>
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center transition-shadow duration-300 bg-transparent shadow-md hover:shadow-xl h-[50vh]"
            onClick={() => handleCardClick(service.title)}  // Add onClick to trigger navigation
          >
            <div className="flex justify-center mb-6" style={{ height: "40vh" }}>
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-[80vw] h-[60vh] border-4 border-white rounded-[5%]"
              />
            </div>

            {/* Title with small blurred background */}
            <h3 className="relative mt-4 text-lg text-center text-white sm:mt-6 sm:text-xl font-sansita">
              <span className="absolute p-1 bg-black bg-opacity-50 rounded-lg backdrop-blur-md ">
                {service.title}
              </span>
            </h3>
          </div>
        ))}
      </Slider>
    </div>






{/* Desktop view: Show grid */}
<div className="hidden grid-cols-1 gap-8 ml-20 mr-20 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {services.slice(0, 3).map((service, index) => (
    <motion.div
      key={index}
      className="relative p-6 transition-shadow duration-300 rounded-lg shadow-sm hover:shadow-md h-[75vh]" // Use percentage for height
      whileHover={{ scale: 1.05 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      onClick={() => handleCardClick(service.title)} // Handle click
    >
      <div className="border-4 border-white rounded-[1rem] h-full"> {/* Use rem for rounded corners */}
        <img
          src={service.image}
          alt={service.title}
          className="object-cover w-full h-full rounded-[1rem]" // Use rem for rounded corners
        />
      </div>
      <div className="absolute w-[75%] px-[1rem] py-[0.5rem] transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-md bg-opacity-50 top-1/2 left-1/2 backdrop-blur-md">
        <h3 className="text-xl text-white sm:text-2xl font-sansita">{service.title}</h3>
      </div>
    </motion.div>
  ))}
</div>




        </div>
      </div>
    </div>
  );
};

export default TeamSection;
