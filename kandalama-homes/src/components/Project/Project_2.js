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
  },
  {
    name: "H.M.K Silva",
    images: [
      "https://s3-alpha-sig.figma.com/img/bfad/4529/c6e6176dc948a4a667f9f85b9d4f3d38?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E7mSc72dyW8GrfbrfLxeTqB3wOJh7z5EK80G8d-uv96EY8tJotQzl8VaaSw3A1KDuLf2Hr8ftqzgra-6f6zlRgxQw0b5H-IOZSavDuWGQKEsefedVyAPQuFwXBQrDOYFLvTvlJLctk-y12mG4lqwGQ1dKefAgeDF9cgOE24KJPgl6ICEjFE4lyyB6ZXGXFdOPE5er9KRdilYeJSfwN2jIFW8Eu97oq3XLu7xUfv8T4vPcEDSo4NwIBEbvap6-Wm9tgQv86qVCvLxvPSqf8dyj1fLp8WFXQkRWDUVOoD1waX7dEfjxLfXKjcZQYiob-a-G8QZwtjES7FrS68F0GfpLw__"
    ]
  },
  {
    name: "Harendra Senarathna",
    images: [
      "https://s3-alpha-sig.figma.com/img/4649/1d92/4d78b967c29e5b99b2a4a9bd225a90e1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I-yU8LBcP-H9Awk6G9hP6OoaMqSXlhfheMy-WSPVt920B5o9bOwfMNlkZzQ0LKYRUbCZim9GjeOpz12gy8O~bhp~jQsXg41AFbQTLmJxoxlt6aq~FxlAzv7Q7xJgtLYHav5SNhO~~diDfs6ZronkaG5u6kJTkiQgzKieNLeYPqNS6~X9wr3SRhCMtD5aCdjR~voK0Gk8czlbxTwiY~2bRX6GG3fnB68s0wmlq1DGta2OlJkIJErZwuov3~PkHmAaeGO2O5IR9UNXgGN32W04gntWFWRJudF1c7Bjw0ODpGMmKoaWLOS4HT5zLbAjaZRzTyEtZLGyqSnvrO01dWJ3yQ__",
      "https://s3-alpha-sig.figma.com/img/5cf1/448f/e4dcd820be79716645b459fe43520394?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QrcTehRz1pxVB7oOWFHmOE0xtsW8dpzx7xPpCAzEg2m43fZyzfouazpFuOp0EWdnVPSR8bcLAKiVVdEdwXsEXjfUPOxfKwxhFoIcG2d9Z~hwYRQ-vB~Efag3VYccBOS4gdDuJly2jTfy01iaWQsmpHYqs7cz1NVx-rOZ6jVCW~yM7F1oJui2EXZY6cuYpmAX3C0CMeHESD2biWfYniHFDqw01Sgc4CCdSImKCiWYTHSofeSZUMHdl61aUUMJh48tWCBovAgnF4Zh4OxNdSbnGQj-yYHk2OFt8jpShTmzqyu~mhmd1rN9vy96fWoGPjSO7cE5D4aigJ7nvtwovkoK5g__",
      "https://s3-alpha-sig.figma.com/img/4a51/0031/d65a3a0f0f1210cf610713f9ed24cf7d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nbj2EsQzGc6rZ9OEUmI~d6PFneR7wktVzpIIoCuNK7ZzpxbtKwFEAINPXS7dJNKysn7uNvJZQMZAXv-Hws-5FFdGCEQPktXB2sobg6YNG4F-NM9oqayRZBz-32rt3Ew6dOpAqiJF71c91oXwHjnHKKKcm1Q7AJyNlGZ-Ur9ZmKqjMqBjdCJ-XRDZpCIbplqpDIdCKOF7UQlh0Lux0x0LvJcnzdV9IYolmI08bE5~HM9W2YurhPobA-byYR53otAadOvxx69oT7N9wDNDpqCwP--fOEJf0VR4HKeV5oLm9u~Ho~Ko08rQRebtAeASYeoe1qTTyX4CbSloYV~beUtSkQ__",
      "https://s3-alpha-sig.figma.com/img/3542/c10c/3ba00ade51ee5796a8a6eb7063044732?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPnICXZBpCK1KuT~lhCUZ6zPQZIgt~lzYuth-Z-uvY9iCox9GolCGvw30r0WZvulNrnkGEiFYcFrS0My70b-oit1Ljg7WqNMOdQRKPHy0xM4mi-vU~Ae3yleX805XijipcP6~S7U5FT02otVaDeruuNzbKxwRFpPMkWIAMxrZ0PY1wHGUZuZWf-OZ7yNLhMwNy~7kQjHie4Qq084jrWlTB9JgmXqu89oiEL2YWs7u~z0uaMh1ZZMQ11X5KlyRb7ibDZcrautPNLdOnmAody4OzMbvljjlidqC3gJKildMIo3gQwVvFY7QhwaBq4oYnfYSwlGvwYNSfyq-DTvbTcKfQ__",
      "https://s3-alpha-sig.figma.com/img/659b/1258/3ac76c236a81babdcb6c45706ed2b2a5?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dD6Ub6wPXE93kA-95JZt9T6BkqwGdnP1Q1f6VD9H6mwPsKPUWyA2o2YK-gnGGwyt-cc~tJFwUXvL6xfqLQ6UorczoYa5RzHT34i0UnrvbYan3BcLBDguA-fxaa73lxphnnUoYCW-OvO2jITV5wk2VspHZrm7AVUMhP7UzxGIuAeyrcoepvfFB8g6FAK3phIqPelYaDT87CKouNCJNz3C0VNw8eR2-aUDFe0YRvMWSgzTzMXEFf1KFmjOA~IN36udbUp3rE8yhkiBLqnsH43RdBwoNiwdx8RXZ9--3stFHMSow8mTdsAC2E3Fkrx4J4pWExcq4d2bp~-S8jf43KgBqQ__",
      "https://s3-alpha-sig.figma.com/img/4649/1d92/4d78b967c29e5b99b2a4a9bd225a90e1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I-yU8LBcP-H9Awk6G9hP6OoaMqSXlhfheMy-WSPVt920B5o9bOwfMNlkZzQ0LKYRUbCZim9GjeOpz12gy8O~bhp~jQsXg41AFbQTLmJxoxlt6aq~FxlAzv7Q7xJgtLYHav5SNhO~~diDfs6ZronkaG5u6kJTkiQgzKieNLeYPqNS6~X9wr3SRhCMtD5aCdjR~voK0Gk8czlbxTwiY~2bRX6GG3fnB68s0wmlq1DGta2OlJkIJErZwuov3~PkHmAaeGO2O5IR9UNXgGN32W04gntWFWRJudF1c7Bjw0ODpGMmKoaWLOS4HT5zLbAjaZRzTyEtZLGyqSnvrO01dWJ3yQ__",
    ]
  },
  {
    name: "H.G Kanishkarandi",
    images: [
      "https://s3-alpha-sig.figma.com/img/f4ed/5704/a938a712a5397c41bbddbd2a80bed293?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=be3zvaRxVTGgHEHrXscvhzu0A7syR1MDyPqLN60GzC9Iwjs8eF~AqKlFWEc0MTRE98GrzeDk61GgG9GYF6qAEiiY1gkTiezzxmkEuXkOaIMRptknW0OkXzosOCzAWk2v7y5yxHZaL2i6LZbUAMtk7VL5n8ypaWHuvvT5lQ5HMcYwHJGB0YGUpcrZVTg1RoVeap1rLBgmIZnbwLGgnxB1hS-VehvIxLqwNy0jE7SRH5P0P8BaegSOB7y~VwtNVytBZ5WtFf28NQC-pTQe9JanpUoXHQQBYeyuY5LJ7OR5WPhd3v8VphLDPBExjDVByYjCjV-oZuYmep56hVTka2YxBQ__"
    ]
  }
];

const OngoingProjects = () => {
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
      <div className="container px-4 mx-auto lg:px-16">
        <h2 className="mb-4 text-3xl text-center text-black font-poppins">Ongoing Projects</h2>
        <p className="mb-10 text-center text-black font-poppins">
          This is a brief description of the project, explaining the goals,
          purpose, and unique features of the project.
        </p>

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
      <div className="w-full md:hidden slider-container">
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

            {/* Pagination */}
            <div className="items-center justify-center hidden mt-8 space-x-2 md:flex">
  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
    <i className="fas fa-chevron-left"></i>
  </button>
  <span className="px-4 py-2 text-white rounded-full bg-customGreen">1</span>
  <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
    <i className="fas fa-chevron-right"></i>
  </button>
</div>




    </div>
  );
};

export default OngoingProjects;
