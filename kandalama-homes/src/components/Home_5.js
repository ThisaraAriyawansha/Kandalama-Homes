import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { useInView } from 'react-intersection-observer'; // Import for scroll-triggered animations

const OurProjects = () => {
  const projects = [
    {
      title: 'Villa',
      description:
        'Villa construction typically involves building a luxurious, standalone residence often designed for comfort.',
      image: 'https://s3-alpha-sig.figma.com/img/e591/98ac/137646a7851579b7643958036e2f8540?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eruO9artFBrcRfsyUvgoXIxvJz25emWc05xDOmFZDULTuEcU9UaBRtIG~Ar04NzJwN5EQCZOPsL0VLToDKQwxHYqbo5vqGL6D4VYg0XZeAyXAj1e6kNsrvfndbPag~33AJkfnkJmtihLJOCE3KEDfWvojd0M-cusPU0fwRiC-l2MXiLNxjOPt6MqcaiQIPUfgZuMpJ5r~wS4eWHOQWow9mKmxZsX6s319P1P1s-LhtkEe77K86J-h-LCat2OObIiYmyexMWzMFr~yGsXKkLe5tg-A3TSMoLIgRo4ISaBIm8MnLC4DuykJhmk8QOFympM-JglW6NOJNEKwo6ooWxJFg__',
    },
    {
      title: 'Home',
      description:
        'Home construction typically involves building a personalized residence designed to meet individual needs.',
      image: 'https://s3-alpha-sig.figma.com/img/cb2b/d03c/fa9d921ef24dce4755f2c537b467294c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zip3rnefqFVMSVguy4-roo8nJdIvSHEjMHaq9MrpUF1YFSoeaSNwWWfwIoTOXw3pbgQH-BcrvVodZpFQtZ1EqoHbjw2R00SgbRNKsk73oxQSr8DPX9ba8Isk5J6KTjEyEGlsCkUaSy0jNOfsx1HQs0aMzSbbwDz9uamJSJR2~ru4BLc90RagaYvCS9Hk~ZF-vHoUsKjeBtKR9bzyeacjFwmEThsNlCkT2daMVJl1FX0QuIYG7bpEb48d6KmHfAcSrXK5bC-HIIAbYVA~ScIUKm1jxWOKQ3jV-rGtu6Zq28EWqYSBQUrn~21m~GL29j1slKCyo-H7qzh1ysLmIqj2XQ__',
    },
    {
      title: 'Cabana',
      description:
        'Cabana construction typically involves creating a cozy and elegant standalone space often used for relaxation.',
      image: 'https://s3-alpha-sig.figma.com/img/efcd/a149/2da1148aa0259570a4bc587e509bbbdd?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cto-LbeuVMHfCQeyX4rUvAWYm4K3T-uU-cZqsLFwm4hok0WO7wwcvaJ6n~-H8lXHsK4q6--00bLrNNBWS7J1jX2w5haTTq2Y3KGYCzRij2rsEtvY3--L747Q17Ar3jZ0Qf39eUXBzG~iPEFXpwRmPem1Pe~eAFY4sl732JMSJKBNu9NtcFhXwlihbcs~9k4bqdookrhlbvEgwI~uEGGrSgTWwo4yRGPQEMyIEldnFG18v4rO1rFUKRzHaPwD6yRVRFG9-L0khDxWnh9iFkzEF8pExLafr4mRgrOy50hY62c3lJkNQVyNgr3S-bhrcHFI5~yqUT01b0hogfQ8O16NVA__',
    },
  ];

  
  return (
    <section className="py-16 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800 font-quando">OUR PROJECTS</h2>
        <p className="mb-12 text-center text-black font-poppins">
        A construction site is a bustling environment where buildings, roads, or other infrastructure projects come to life. It is filled with the sights and<br/>
         sounds of progress, including heavy machinery like cranes, excavators, and bulldozers, alongside teams of workers in safety gear<br/>
          collaborating to meet project goals. Safety is a top priority, with protocols in place to ensure the well-being of everyone involved. Materials<br/>
           such as steel, concrete, and lumber are strategically moved and assembled as blueprints transform into reality. The dynamic atmosphere<br/>
            reflects both the complexity and precision required to bring architectural visions to completion.        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger the animation when 50% of the element is in view
  });

  return (
<motion.div
  ref={ref} // Reference for the scroll detection
  className="overflow-hidden transition-shadow duration-300 rounded-lg shadow-md bg-customGreen hover:shadow-lg hover:scale-105 transform-gpu"
  initial={{ opacity: 0, y: 100 }} // Initial state
  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }} // Animated state based on scroll visibility
  transition={{ delay: index * 0.2, duration: 1 }} // Transition details
>
  <div className="relative group"> {/* Group for hover effects */}
    {/* Image */}
    <img
      src={project.image}
      alt={project.title}
      className="object-cover w-full h-56 transition-transform duration-300 group-hover:scale-110" // Image hover effect
    />

    {/* Title Container */}
    <div className="absolute left-0 w-1/4 p-2 transform -translate-y-1/2 bg-white rounded-r-md top-3/4">
      <h3 className="text-lg font-semibold text-customGreen font-prata">{project.title}</h3>
    </div>
  </div>

  {/* Description */}
  <div className="p-6">
    <p className="text-center text-white font-poppins">{project.description}</p>
  </div>
</motion.div>

  );
};

export default OurProjects;
