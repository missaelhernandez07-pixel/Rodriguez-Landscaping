import React from 'react';
import { motion } from 'framer-motion';

export default function Services(){
  const services = [
    {
      title: 'Full Lawn Care & Maintenance',
      description: 'Regular mowing, edging, trimming, and lawn health treatments to keep your yard looking pristine.',
      image: '/images/services/lawn-care.jpg'
    },
    {
      title: 'Sod Installation & Yard Restoration',
      description: 'Transform your yard with fresh, healthy sod. We handle removal, soil prep, and installation.',
      image: '/images/services/sod.jpg'
    },
    {
      title: 'Landscape Design',
      description: 'Custom landscape designs featuring native Texas plants, flower beds, and hardscaping.',
      image: '/images/services/landscape.jpg'
    },
    {
      title: 'Home Repairs',
      description: 'Minor home repairs and maintenance to keep your property in top condition.',
      image: '/images/services/repairs.jpg'
    },
    {
      title: 'Holiday Decoration Installation',
      description: 'Professional Christmas light installation and holiday decor setup for residential and commercial properties.',
      image: '/images/services/holiday.jpg'
    }
  ];

  return (
    <motion.section 
      className="page services-page"
      initial={{opacity:0, y:10}} 
      animate={{opacity:1, y:0}} 
      transition={{duration:0.6}}
    >
      <h2>Our Services</h2>
      <p className="page-subtitle">Quality landscaping and home services for the DFW area</p>
      
      <div className="services-list">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-card"
            initial={{opacity:0, x: index % 2 === 0 ? -20 : 20}}
            animate={{opacity:1, x:0}}
            transition={{duration:0.5, delay: index * 0.1}}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="cta-section">
        <h3>Ready to transform your property?</h3>
        <a href="/estimate" className="btn">Get a Free Estimate</a>
      </div>
    </motion.section>
  );
}
