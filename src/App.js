import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Estimate from './pages/Estimate';
import Contact from './pages/Contact';
import Holiday from './pages/Holiday';

export default function App(){
  return (
    <Router>
      <div className="app">
        <Navbar />
        <motion.main initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6}}>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/estimate' element={<Estimate/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/holiday' element={<Holiday/>} />
          </Routes>
        </motion.main>
        <footer className="site-footer">© Rodriguez Landscaping — DFW</footer>
      </div>
    </Router>
  );
}