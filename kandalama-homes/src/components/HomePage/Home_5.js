import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';

// Projects data
const projects = [
  {
    title: 'Villa',
    description: 'Villa construction typically involves building a luxurious, standalone residence often designed for comfort',
    image: 'https://s3-alpha-sig.figma.com/img/e591/98ac/137646a7851579b7643958036e2f8540?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eruO9artFBrcRfsyUvgoXIxvJz25emWc05xDOmFZDULTuEcU9UaBRtIG~Ar04NzJwN5EQCZOPsL0VLToDKQwxHYqbo5vqGL6D4VYg0XZeAyXAj1e6kNsrvfndbPag~33AJkfnkJmtihLJOCE3KEDfWvojd0M-cusPU0fwRiC-l2MXiLNxjOPt6MqcaiQIPUfgZuMpJ5r~wS4eWHOQWow9mKmxZsX6s319P1P1s-LhtkEe77K86J-h-LCat2OObIiYmyexMWzMFr~yGsXKkLe5tg-A3TSMoLIgRo4ISaBIm8MnLC4DuykJhmk8QOFympM-JglW6NOJNEKwo6ooWxJFg__',
  },
  {
    title: 'Home',
    description: 'Home construction typically involves building a personalized residence designed to meet individual needs.',
    image: 'https://s3-alpha-sig.figma.com/img/cb2b/d03c/fa9d921ef24dce4755f2c537b467294c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zip3rnefqFVMSVguy4-roo8nJdIvSHEjMHaq9MrpUF1YFSoeaSNwWWfwIoTOXw3pbgQH-BcrvVodZpFQtZ1EqoHbjw2R00SgbRNKsk73oxQSr8DPX9ba8Isk5J6KTjEyEGlsCkUaSy0jNOfsx1HQs0aMzSbbwDz9uamJSJR2~ru4BLc90RagaYvCS9Hk~ZF-vHoUsKjeBtKR9bzyeacjFwmEThsNlCkT2daMVJl1FX0QuIYG7bpEb48d6KmHfAcSrXK5bC-HIIAbYVA~ScIUKm1jxWOKQ3jV-rGtu6Zq28EWqYSBQUrn~21m~GL29j1slKCyo-H7qzh1ysLmIqj2XQ__',
  },
  {
    title: 'Cabana',
    description: 'Cabana construction typically involves creating a cozy and elegant standalone space.',
    image: 'https://s3-alpha-sig.figma.com/img/efcd/a149/2da1148aa0259570a4bc587e509bbbdd?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cto-LbeuVMHfCQeyX4rUvAWYm4K3T-uU-cZqsLFwm4hok0WO7wwcvaJ6n~-H8lXHsK4q6--00bLrNNBWS7J1jX2w5haTTq2Y3KGYCzRij2rsEtvY3--L747Q17Ar3jZ0Qf39eUXBzG~iPEFXpwRmPem1Pe~eAFY4sl732JMSJKBNu9NtcFhXwlihbcs~9k4bqdookrhlbvEgwI~uEGGrSgTWwo4yRGPQEMyIEldnFG18v4rO1rFUKRzHaPwD6yRVRFG9-L0khDxWnh9iFkzEF8pExLafr4mRgrOy50hY62c3lJkNQVyNgr3S-bhrcHFI5~yqUT01b0hogfQ8O16NVA__',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Only show one card at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  centerMode: false, // Disable centerMode to avoid showing partial cards on the sides
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768, // Mobile view settings
      settings: {
        slidesToShow: 1, // Show 1 slide per view
        slidesToScroll: 1,
      },
    },
  ],
};

const OurProjects = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-4xl font-bold text-center text-gray-800 font-quando">OUR PROJECTS</h2>
        <p className="mb-12 text-center text-black font-poppins">
        A construction site is a bustling environment where buildings, roads, or other infrastructure projects come to life. It is filled with the sights and sounds of progress, including heavy machinery like cranes, excavators, and bulldozers, alongside teams of workers in safety gear collaborating to meet project goals. Safety is a top priority, with protocols in place to ensure the well-being of everyone involved. Materials such as steel, concrete, and lumber are strategically moved and assembled as blueprints transform into reality. The dynamic atmosphere reflects both the complexity and precision required to bring architectural visions to completion.        </p>

        {/* Desktop Grid */}
        <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Slider {...settings} className="w-full">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} isMobile={true} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isMobile }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const cardClasses = isMobile
    ? 'overflow-hidden transition-shadow duration-300 rounded-lg shadow-md bg-customGreen hover:shadow-lg hover:scale-105 transform-gpu max-w-xs mx-auto h-auto py-2 flex flex-col items-center'
    : 'overflow-hidden transition-shadow duration-300 rounded-lg shadow-md bg-customGreen hover:shadow-lg hover:scale-105 transform-gpu h-96 flex flex-col items-center';

  const imageClasses = isMobile
    ? 'object-contain w-full max-h-60 transition-transform duration-300 group-hover:scale-105'
    : 'object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105';

  const textClasses = 'text-center text-white font-poppins p-4 flex-grow';

  return (
    <motion.div
      ref={ref}
      className={cardClasses}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
      transition={{ delay: index * 0.2, duration: 1 }}
    >
      <div className="w-full">
        <img src={project.image} alt={project.title} className={imageClasses} />
        <div className="left-0 w-2/5 p-2 transform -translate-y-1/2 bg-white rounded-r-md">
          <h3 className="text-2xl text-customGreen font-prata">{project.title}</h3>
        </div>
      </div>
      <p className={textClasses}>{project.description}</p>
    </motion.div>
  );
};

export default OurProjects;
