import React from 'react';
import { motion } from 'framer-motion';

export default function Projects(){
  // Add your project images here - place photos in public/images/projects/
  const projects = [
    { id: 1, title: 'Backyard Transformation', image: '/images/projects/project1.jpg', description: 'Complete backyard renovation' },
    { id: 2, title: 'Front Yard Design', image: '/images/projects/project2.jpg', description: 'Modern front yard landscaping' },
    { id: 3, title: 'Sod Installation', image: '/images/projects/project3.jpg', description: 'Fresh sod for a lush green lawn' },
    { id: 4, title: 'Garden Design', image: '/images/projects/project4.jpg', description: 'Beautiful garden with native plants' },
    { id: 5, title: 'Holiday Lights', image: '/images/projects/project5.jpg', description: 'Professional Christmas light installation' },
    { id: 6, title: 'Patio Work', image: '/images/projects/project6.jpg', description: 'Custom patio and outdoor living space' },
  ];

  return (
    <motion.section 
      className="page projects-page" 
      initial={{opacity:0, y:10}} 
      animate={{opacity:1, y:0}} 
      transition={{duration:0.6}}
    >
      <h2>Project Gallery</h2>
      <p className="page-subtitle">Check out some of our recent work across the DFW area</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id} 
            className="project-card"
            initial={{opacity:0, y:20}}
            animate={{opacity:1, y:0}}
            transition={{duration:0.4, delay: index * 0.1}}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
