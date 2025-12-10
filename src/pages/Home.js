import React from 'react';
import { motion } from 'framer-motion';

export default function Home(){
  return (
    <motion.section className="page hero" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
      <div className="hero-content">
        <h1>Rodriguez Landscaping</h1>
        <p>Professional landscaping, home repairs, and holiday decoration services across the DFW area.</p>
        <div className="hero-cta">
          <a href="/estimate" className="btn">Request Free Estimate</a>
        </div>
      </div>
      
      {/* Hero image - add your image to public/images/hero.jpg */}
      <div className="hero-image">
        <img src="/images/hero.jpg" alt="Beautiful landscaping by Rodriguez Landscaping" />
      </div>

      {/* Featured Work Section */}
      <div className="featured-section">
        <h2>Our Work</h2>
        <div className="featured-grid">
          <div className="featured-card">
            <img src="/images/lawn-care.jpg" alt="Lawn care service" />
            <h3>Lawn Care</h3>
          </div>
          <div className="featured-card">
            <img src="/images/landscaping.jpg" alt="Landscape design" />
            <h3>Landscaping</h3>
          </div>
          <div className="featured-card">
            <img src="/images/holiday.jpg" alt="Holiday decorations" />
            <h3>Holiday Decor</h3>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
