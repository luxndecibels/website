import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Briefcase, 
  Layers, 
  Users, 
  Monitor, 
  Crosshair, 
  Plane, 
  Anchor, 
  Lightbulb, 
  Volume2, 
  Camera 
} from 'lucide-react';
import '../style/AboutDetail.css';
import storyImage1 from '../assets/semmozhi.png';
import storyImage2 from '../assets/ar-vr.jpeg';
import storyImage3 from '../assets/award1.jpeg';
import storyImage4 from '../assets/driving1.png';
import arvrImage from '../assets/ar-vr.jpeg';

export default function AboutDetail() {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 10);
  }, []);

  return (
    <div className="about-page-wrapper">
      {/* ── HERO SECTION ── */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-breadcrumbs">
              <Link to="/">HOME</Link> / <span>ABOUT US</span>
            </div>
            <h1 className="about-hero-title">
              ABOUT
              <span>LUX & DECIBELS</span>
            </h1>
            <div className="about-hero-divider" />
            <p className="about-hero-subtitle">
              Pioneering immersive experiences with light, sound, technology and innovation since 2007.
            </p>
          </div>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section className="about-story-section">
        <div className="container">
          
          <div className="about-story-grid">
            <div>
              <div className="about-story-label">OUR STORY</div>
              <div className="about-story-text">
                <p>
                  Founded in Chennai in 2007, Lux & Decibels began its journey as a specialized lighting design consultancy with a vision to transform India's architectural and cultural landmarks through innovative illumination. Our breakthrough Sound & Light Show for a historic fort in Tamil Nadu established a new benchmark in immersive storytelling, combining artistic creativity with advanced lighting, projection, and audio technologies. This early success laid the foundation for our reputation as pioneers in experiential design and large-scale public attractions.
                </p>
              </div>
            </div>
            <div>
              <div className="about-story-img-wrap">
                <img 
                  src={storyImage1} 
                  alt="Lux & Decibels Building" 
                  className="about-story-image"
                />
              </div>
            </div>
          </div>

          <div className="about-story-grid about-story-grid-reverse" style={{ marginTop: '60px' }}>
            <div>
              <div className="about-story-img-wrap">
                <img 
                  src={storyImage2} 
                  alt="Lux & Decibels Innovation" 
                  className="about-story-image"
                />
              </div>
            </div>
            <div>
              <div className="about-story-text">
                <p>
                  As technology evolved, so did our vision. Recognizing the transformative potential of Extended Reality (XR), we expanded beyond architectural lighting into the development of cutting-edge Virtual Reality (VR), Augmented Reality (AR), Mixed Reality (MR), and simulation-based training systems. By integrating immersive technologies with precision engineering, we create realistic training environments, interactive experiences, and innovative digital solutions that serve both commercial and mission-critical applications across diverse industries.
                </p>
              </div>
            </div>
          </div>

          <div className="about-story-grid" style={{ marginTop: '60px' }}>
            <div>
              <div className="about-story-text">
                <p>
                  Today, Lux & Decibels operates across multiple specialized domains, delivering world-class solutions in defence simulation, heritage conservation, projection mapping, architectural lighting, musical fountains, immersive museums, interactive exhibits, and XR-based training systems. Our work is driven by a passion for innovation and a commitment to blending technology with creativity, enabling organizations to educate, inspire, preserve heritage, and train with confidence through memorable and impactful experiences.
                </p>
              </div>
            </div>
            <div>
              <div className="about-story-img-wrap">
                <img 
                  src={storyImage3} 
                  alt="Lux & Decibels Expertise" 
                  className="about-story-image crop-more"
                />
              </div>
            </div>
          </div>

          <div className="about-story-grid about-story-grid-reverse" style={{ marginTop: '60px' }}>
            <div>
              <div className="about-story-img-wrap">
                <img 
                  src={storyImage4} 
                  alt="Lux & Decibels Partnerships" 
                  className="about-story-image"
                />
              </div>
            </div>
            <div>
              <div className="about-story-text">
                <p>
                  Our commitment to excellence has earned the trust of leading organizations across India. We are proud to have collaborated with the Indian Army, Indian Navy, Indian Air Force, Tamil Nadu Tourism, Telangana Tourism, Andhra Pradesh Tourism Development Corporation (APTDC), West Bengal Forest Development Corporation, Experience Bengal, Nuclear Power Corporation of India Limited (NPCIL), Star Vijay, Zee TV, Sun TV, and Asianet. These partnerships reflect our dedication to delivering reliable, high-quality solutions and reinforce our position as a trusted partner in creating immersive experiences that combine innovation, engineering excellence, and meaningful storytelling.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── IMPACT IN NUMBERS ── */}
      <section className="about-impact-section">
        <div className="container">
          <div className="about-impact-container">
            <div className="impact-label-wrapper">OUR IMPACT IN NUMBERS</div>
            
            <div className="impact-stat">
              <Calendar size={40} className="impact-icon" strokeWidth={1.5} />
              <div className="impact-details">
                <span className="impact-number">17+</span>
                <span className="impact-text">YEARS OF<br/>EXPERIENCE</span>
              </div>
            </div>

            <div className="impact-stat">
              <Briefcase size={40} className="impact-icon" strokeWidth={1.5} />
              <div className="impact-details">
                <span className="impact-number">182+</span>
                <span className="impact-text">PROJECTS<br/>DELIVERED</span>
              </div>
            </div>

            <div className="impact-stat">
              <Layers size={40} className="impact-icon" strokeWidth={1.5} />
              <div className="impact-details">
                <span className="impact-number">7</span>
                <span className="impact-text">BUSINESS<br/>VERTICALS</span>
              </div>
            </div>

            <div className="impact-stat">
              <Users size={40} className="impact-icon" strokeWidth={1.5} />
              <div className="impact-details">
                <span className="impact-number">100+</span>
                <span className="impact-text">HAPPY<br/>CLIENTS</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── OUR EXPERTISE ── */}
      <section className="about-expertise-section">
        <div className="container">
          <div className="expertise-label-wrapper">
            <div className="expertise-label">OUR EXPERTISE</div>
          </div>
          
          <div className="expertise-grid">
            <div className="expertise-item">
              <div className="expertise-icon-wrap"><Monitor size={28} strokeWidth={1.5} /></div>
              <span className="expertise-text">AR / VR / MR / AI</span>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon-wrap"><Crosshair size={28} strokeWidth={1.5} /></div>
              <span className="expertise-text">Defence<br/>Simulators</span>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon-wrap"><Plane size={28} strokeWidth={1.5} /></div>
              <span className="expertise-text">Virtual Flight<br/>Simulations</span>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon-wrap"><Anchor size={28} strokeWidth={1.5} /></div>
              <span className="expertise-text">Naval<br/>Simulations</span>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon-wrap"><Lightbulb size={28} strokeWidth={1.5} /></div>
              <span className="expertise-text">Dynamic<br/>Lighting</span>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon-wrap"><Volume2 size={28} strokeWidth={1.5} /></div>
              <span className="expertise-text">Sound &<br/>Light Shows</span>
            </div>
            <div className="expertise-item">
              <div className="expertise-icon-wrap"><Camera size={28} strokeWidth={1.5} /></div>
              <span className="expertise-text">Mid Air<br/>Projections</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-container">
            <div>
              <h2 className="about-cta-title">READY TO BUILD<br/>THE FUTURE TOGETHER?</h2>
              <p className="about-cta-subtitle">Let's create immersive experiences that leave a lasting impact.</p>
            </div>
            <button className="about-cta-btn" onClick={() => navigate('/#contact')}>
              CONNECT WITH US <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
}
