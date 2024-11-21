import React, { useState } from "react";

const projects = [
  {
    name: "H. Perera",
    images: [
      "https://s3-alpha-sig.figma.com/img/bf96/bdd5/178b09012c8add2e85fab7ae2e78bec1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q08qyykcVK2Wu0R2Z~n1o66blm7Otdz5iZ9NxiNQjlIDuQyP26fmA21Gm66TOx6iSEixSuG4Gi9bC4AWHI5VfCk8wZ6cqPUgf9XXf1T8mPEdHagJgFXth0daytXpsArdVCPZ9Qi0OCuOgqjs5w8mBNr-jhIT0PLyxuhX3PMLXPq49bsEwpIdAq0rWg59N7yKhjuUtEOdQJYnuVRoSsR79aNEIG9JJ4AyVdkhGv2CnEqvmQ12UBqniMLrZetq1gj8YwyINHA5TUnoYo9XI1C~IMTBNpOc4SOFl-vHNSRXzG2Z7F8Ec5OqccUIAh4Go9BcjitW29ZnCw3HBFdhOAxHVQ__"
    ]
  }

];

const FinishProjects = () => {
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
        <h2 className="mb-20 text-3xl text-center text-black  font-poppins">Completed Projects</h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
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
                  className="px-4 py-2 text-white bg-customGreen"
                  onClick={() => handleViewAllImagesClick(project)}
                >
                  View All Images
                </button>
              </div>
            </div>
          ))}

          
        </div>

        {isPopupOpen && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  <div className="relative bg-white p-6 rounded-lg shadow-xl w-2/4 max-w-3xl max-h-[80vh] overflow-auto">
    
    {/* Close Button */}
    <button
      onClick={handleClosePopup}
      className="absolute p-2 text-white bg-red-600 rounded-full top-4 right-4 hover:bg-red-700"
    >
      X
    </button>
    
    {/* Header with Red Container */}
    <div className="p-2 text-black rounded-t-lg">
      <h2 className="text-xl text-center font-poppins">{selectedProject.name} - Images</h2>
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-3 gap-4 mt-4">
      {selectedProject.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${selectedProject.name} Image ${index + 1}`}
          className="object-contain w-full h-auto"
        />
      ))}


      
    </div>
  </div>
</div>




        )}
      </div>


    </div>
  );
};

export default FinishProjects;
