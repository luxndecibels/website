import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import '../style/Hero.css';

import beharImg from '../assets/behar.png';
import defence4Img from '../assets/defence4.png';
import kanipakkam1Img from '../assets/kanipakkam1.png';
import driving1Img from '../assets/driving1.png';
import madurai1Img from '../assets/madurai1.png';
import chairninarImg from '../assets/chairninar.png';
import coverImage1Img from '../assets/cover-image1.jpeg';

const backgroundImages = [beharImg, defence4Img, kanipakkam1Img, driving1Img, madurai1Img, chairninarImg, coverImage1Img];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        {backgroundImages.map((img, index) => (
          <img
            key={img}
            src={img}
            alt={`Hero Background ${index + 1}`}
            className="hero-img"
            style={{
              opacity: index === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: img === driving1Img ? 'center 15%' : 'center'
            }}
          />
        ))}
        <div className="hero-overlay" />
      </div>
      <div className="hero-content container">
        <div className="hero-badge">IMMERSIVE EXPERIENCES</div>
        <h1 className="hero-title">
          Crafting Wonder
          <span>Across Generations</span>
        </h1>
        <div className="hero-divider" />
        <p className="hero-desc">
          India's premier immersive experience company — from son et lumière shows
          at heritage monuments to cutting-edge XR defence simulators.
        </p>
        <div className="hero-actions">
          <button className="btn-primary teal" onClick={() => scrollTo('services')}>
            Our Services <ArrowRight size={13} />
          </button>
          <button className="btn-outline" onClick={() => scrollTo('about')}>
            Know More
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">17+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">182+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">7</span>
            <span className="stat-label">Specializations</span>
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="scroll-mouse" />
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
