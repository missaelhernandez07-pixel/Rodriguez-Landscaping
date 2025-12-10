import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar(){
  const loc = useLocation();
  return (
    <motion.nav className="nav" initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.5}}>
      <div className="nav-inner">
        <div className="brand">
          <Link to="/">Rodriguez Landscaping</Link>
        </div>
        <div className="links">
          <Link className={loc.pathname==='/'? 'active':''} to="/">Home</Link>
          <Link className={loc.pathname==='/services'? 'active':''} to="/services">Services</Link>
          <Link className={loc.pathname==='/projects'? 'active':''} to="/projects">Projects</Link>
          <Link className={loc.pathname==='/about'? 'active':''} to="/about">About</Link>
          <Link className={loc.pathname==='/estimate'? 'active':''} to="/estimate">Estimate</Link>
          <Link className={loc.pathname==='/contact'? 'active':''} to="/contact">Contact</Link>
          <Link className={loc.pathname==='/holiday'? 'active':''} to="/holiday">Holiday</Link>
        </div>
      </div>
    </motion.nav>
  );
}