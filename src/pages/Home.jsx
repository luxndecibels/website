import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Partners from '../components/Partners';
import Projects from '../components/Projects';
import Team from '../components/Team';
import Contact from '../components/Contact';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1).toLowerCase();
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Instantly scroll to top when there's no hash
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
      }, 10);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Partners />
      <Projects />
      <Team />
      <Contact />
    </>
  );
}
