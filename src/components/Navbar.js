import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar(){
  const loc = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav className="nav" initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}}>
      <div className="nav-inner">
        <div className="brand">
          <Link to="/" onClick={closeMenu}>Rodriguez Landscaping</Link>
        </div>
        
        {/* Hamburger button for mobile */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
          <span className={menuOpen ? 'bar open' : 'bar'}></span>
        </button>

        <div className={menuOpen ? 'links open' : 'links'}>
          <Link className={loc.pathname==='/'? 'active':''} to="/" onClick={closeMenu}>Home</Link>
          <Link className={loc.pathname==='/services'? 'active':''} to="/services" onClick={closeMenu}>Services</Link>
          <Link className={loc.pathname==='/projects'? 'active':''} to="/projects" onClick={closeMenu}>Projects</Link>
          <Link className={loc.pathname==='/about'? 'active':''} to="/about" onClick={closeMenu}>About</Link>
          <Link className={loc.pathname==='/estimate'? 'active':''} to="/estimate" onClick={closeMenu}>Estimate</Link>
          <Link className={loc.pathname==='/contact'? 'active':''} to="/contact" onClick={closeMenu}>Contact</Link>
          <Link className={loc.pathname==='/holiday'? 'active':''} to="/holiday" onClick={closeMenu}>Holiday</Link>
        </div>
      </div>
    </motion.nav>
  );
}
