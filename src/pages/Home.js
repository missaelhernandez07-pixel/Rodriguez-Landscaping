import React from 'react';
import { motion } from 'framer-motion';

export default function Home(){
  return (
    <motion.section className="page hero" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
      <div className="hero-content">
        <motion.div 
          className="hero-badge"
          initial={{opacity:0, scale:0.8}} 
          animate={{opacity:1, scale:1}} 
          transition={{delay:0.2, duration:0.4}}
        >
          ★ Serving DFW Since 2015
        </motion.div>
        
        <motion.h1 
          className="hero-title"
          initial={{opacity:0, y:20}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.3, duration:0.5}}
        >
          Rodriguez<br/>
          <span className="hero-title-accent">Landscaping</span>
        </motion.h1>
        
        <motion.p 
          className="hero-tagline"
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{delay:0.5, duration:0.5}}
        >
          Transform your outdoor space into something beautiful
        </motion.p>
        
        <motion.p 
          className="hero-description"
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{delay:0.6, duration:0.5}}
        >
          Professional landscaping, home repairs, and holiday decoration services across the DFW area.
        </motion.p>
        
        <motion.div 
          className="hero-cta"
          initial={{opacity:0, y:10}} 
          animate={{opacity:1, y:0}} 
          transition={{delay:0.7, duration:0.4}}
        >
          <a href="/estimate" className="btn btn-primary">Request Free Estimate</a>
          <a href="/projects" className="btn btn-secondary">View Our Work</a>
        </motion.div>
      </div>
      
      {/* Hero image */}
      <motion.div 
        className="hero-image"
        initial={{opacity:0, scale:0.95}} 
        animate={{opacity:1, scale:1}} 
        transition={{delay:0.4, duration:0.6}}
      >
        <img src="/images/hero.jpg" alt="Beautiful landscaping by Rodriguez Landscaping" />
        <div className="hero-image-overlay"></div>
      </motion.div>

      {/* Featured Work Section */}
      <div className="featured-section">
        <h2>Our Work</h2>
        <div className="featured-grid">
          <motion.div 
            className="featured-card"
            whileHover={{y: -8}}
            transition={{duration:0.3}}
          >
            <img src="/images/lawn-care.jpg" alt="Lawn care service" />
            <h3>Lawn Care</h3>
          </motion.div>
          <motion.div 
            className="featured-card"
            whileHover={{y: -8}}
            transition={{duration:0.3}}
          >
            <img src="/images/landscaping.jpg" alt="Landscape design" />
            <h3>Landscaping</h3>
          </motion.div>
          <motion.div 
            className="featured-card"
            whileHover={{y: -8}}
            transition={{duration:0.3}}
          >
            <img src="/images/holiday.jpg" alt="Holiday decorations" />
            <h3>Holiday Decor</h3>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
