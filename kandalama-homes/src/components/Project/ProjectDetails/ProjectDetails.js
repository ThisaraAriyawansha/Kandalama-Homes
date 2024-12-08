import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to access the URL params
import { motion } from "framer-motion";
import Navbar from "../../NavBar";
import Footer from "../../Footer";

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null); // Store the project details

  useEffect(() => {
    // Fetch project details from the API using the project ID
    fetch(`http://localhost:8000/projects_web_image_video/${id}`)
      .then((response) => response.json())
      .then((data) => setProject(data))
      .catch((error) => console.error("Error fetching project details:", error));
  }, [id]); // Re-fetch data if the project ID changes

  if (!project) {
    return <div>Loading...</div>; // Display loading state while data is being fetched
  }

  return (
    <div>
      <Navbar />
      <motion.div
        className="w-full h-40 bg-customGreen rounded-b-[40px]"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="p-16 text-3xl text-center text-white sm:text-left sm:text-3xl font-prata">
            Project Details
        </h2>
      </motion.div>

      <div className="container p-8">
      <h3 className="text-xl font-bold">{project.project_name}</h3>
        <h3 className="text-xl font-bold">{project.category_name}</h3>
        <p className="mb-4">{project.description}</p>
        <p className="mb-4">Client: {project.client_name}</p>
        <p>Status: {project.status}</p>

        <div className="mt-8">
          <h4 className="text-lg font-semibold">Images</h4>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {project.images.map((image) => (
              <img
                key={image.image_id}
                src={image.image_url}
                alt="Project"
                className="object-cover w-full h-48 rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold">Videos</h4>
          <div className="space-y-4">
            {project.videos.map((video) => (
              <video key={video.video_id} controls className="w-full">
                <source src={video.video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
