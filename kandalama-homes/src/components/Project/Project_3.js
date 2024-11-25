import React, { useState } from "react";
import Slider from "react-slick";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Only show one card at a time
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: false, // Ensure no center mode to avoid partial cards on the sides
  focusOnSelect: true, // Ensure focus on selecting the card
  arrows: false, // Disable arrows
  responsive: [
    {
      breakpoint: 768, // Mobile view settings
      settings: {
        slidesToShow: 1, // Show only 1 slide at a time on mobile
        slidesToScroll: 1,
        centerMode: false, // Disable center mode for mobile view
        infinite: true, // Allow infinite scrolling on mobile
      },
    },
  ],
};


const settingsMore = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1, // Only show one card at a time
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: false, // Ensure no center mode to avoid partial cards on the sides
  focusOnSelect: true, // Ensure focus on selecting the card
  arrows: false, // Disable arrows
  responsive: [
    {
      breakpoint: 768, // Mobile view settings
      settings: {
        slidesToShow: 1, // Show only 1 slide at a time on mobile
        slidesToScroll: 1,
        centerMode: false, // Disable center mode for mobile view
        infinite: true, // Allow infinite scrolling on mobile
      },
    },
  ],
};



const projects = [
  {
    name: "H. Perera",
    images: [
      "https://s3-alpha-sig.figma.com/img/bf96/bdd5/178b09012c8add2e85fab7ae2e78bec1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q08qyykcVK2Wu0R2Z~n1o66blm7Otdz5iZ9NxiNQjlIDuQyP26fmA21Gm66TOx6iSEixSuG4Gi9bC4AWHI5VfCk8wZ6cqPUgf9XXf1T8mPEdHagJgFXth0daytXpsArdVCPZ9Qi0OCuOgqjs5w8mBNr-jhIT0PLyxuhX3PMLXPq49bsEwpIdAq0rWg59N7yKhjuUtEOdQJYnuVRoSsR79aNEIG9JJ4AyVdkhGv2CnEqvmQ12UBqniMLrZetq1gj8YwyINHA5TUnoYo9XI1C~IMTBNpOc4SOFl-vHNSRXzG2Z7F8Ec5OqccUIAh4Go9BcjitW29ZnCw3HBFdhOAxHVQ__",
     
    ]
  }

];

const Completed_Projects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewAllImagesClick = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="p-16 bg-gray-50">
      <div className="container px-4 mx-auto mb-20 lg:px-16">
        <h2 className="mb-10 text-3xl text-center text-black font-poppins">Completed Projects</h2>

        <div>
      {/* Desktop view: Show grid */}
      <div className="hidden grid-cols-1 gap-6 md:grid sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mx-4 overflow-hidden transition bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <img
              src={project.images[0]} // Use the first image as a thumbnail
              alt={project.name}
              className="object-cover w-full h-48"
            />
            <div className="p-4 text-center">
              <h3 className="mb-2 text-lg text-black font-poppins">{project.name}</h3>
              <button
                className="px-4 py-2 text-white bg-customGreen font-poppins"
                onClick={() => handleViewAllImagesClick(project)}
              >
                View All Images
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view: Show slider */}
{/* Mobile view: Show slider only if there are multiple projects */}
<div className="w-full md:hidden slider-container">
  {projects.length > 1 ? (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div
          key={index}
          className="w-full mx-0 overflow-hidden transition bg-white rounded-lg shadow-md hover:shadow-lg"
        >
          <img
            src={project.images[0]} // Use the first image as a thumbnail
            alt={project.name}
            className="object-cover w-full h-48"
          />
          <div className="p-4 text-center">
            <h3 className="mb-2 text-lg text-black font-poppins">{project.name}</h3>
            <button
              className="px-4 py-2 text-white bg-customGreen font-poppins"
              onClick={() => handleViewAllImagesClick(project)}
            >
              View All Images
            </button>
          </div>
        </div>
      ))}
    </Slider>
  ) : (
    <div
      key={projects[0].name} // Display single project without slider
      className="w-full mx-0 overflow-hidden transition bg-white rounded-lg shadow-md hover:shadow-lg"
    >
      <img
        src={projects[0].images[0]} // Use the first image as a thumbnail
        alt={projects[0].name}
        className="object-cover w-full h-48"
      />
      <div className="p-4 text-center">
        <h3 className="mb-2 text-lg text-black font-poppins">{projects[0].name}</h3>
        <button
          className="px-4 py-2 text-white bg-customGreen font-poppins"
          onClick={() => handleViewAllImagesClick(projects[0])}
        >
          View All Images
        </button>
      </div>
    </div>
  )}
</div>



    </div>

    {isPopupOpen && selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    {/* Modal Container */}
    <div className="relative bg-white p-6 rounded-lg shadow-xl w-11/12 sm:w-2/4 md:w-2/4 lg:w-1/3 max-w-3xl max-h-[80vh] overflow-auto">

      {/* Close Button (Desktop Version) */}
      <button
        onClick={handleClosePopup}
        className="absolute hidden p-2 text-white bg-red-600 rounded-full top-4 right-4 hover:bg-red-700 md:block"
      >
        X
      </button>
      
      {/* Header with Red Container */}
      <div className="p-2 text-black rounded-t-lg">
        <h2 className="text-xl text-center font-poppins">{selectedProject.name} - Images</h2>
      </div>

      {/* Desktop View: Grid Layout */}
      <div className="hidden grid-cols-2 gap-4 mt-4 sm:grid sm:grid-cols-3">
        {selectedProject.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${selectedProject.name} Image ${index + 1}`}
            className="object-contain w-full h-auto"
          />
        ))}
      </div>



{/* Mobile View: Slider (One Image at a Time) */}
<div className="w-full md:hidden max-h-[40vh]"> {/* Reduced max-height for smaller view */}
  
  {/* Close Button (Mobile Version) */}
  <button
    onClick={handleClosePopup}
    className="absolute p-2 text-lg text-white bg-red-600 rounded-full top-4 right-4 hover:bg-red-700 focus:outline-none"
  >
    X
  </button>
  
  {/* Slider Container */}
  <div className="w-10/12 mx-auto mt-4 max-h-[40vh] overflow-hidden items-center justify-center">
    {selectedProject.images.length > 1 ? (
      <Slider {...settingsMore}>
        {selectedProject.images.map((image, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={image}
              alt={`${selectedProject.name} Image ${index + 1}`}
              className="object-contain w-full max-w-[85%] max-h-[35vh] items-center justify-center"
            />
          </div>
        ))}
      </Slider>
    ) : (
      <div className="flex items-center justify-center">
        <img
          src={selectedProject.images[0]}
          alt={`${selectedProject.name} Image`}
          className="object-contain w-full max-w-[85%] max-h-[35vh] items-center justify-center"
        />
      </div>
    )}
  </div>
</div>






      
    </div>
  </div>
)}






      </div>

 
    </div>
  );
};

export default Completed_Projects;
