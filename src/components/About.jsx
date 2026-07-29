import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import '../style/About.css';

export default function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-label">OUR STORY</div>
            <h2 className="section-title">Where Technology <span>Meets Art</span></h2>
            <p className="about-text">
              Founded in Chennai in 2007, Lux &amp; Decibels began as a specialist lighting design
              consultancy, earning national recognition for transforming India's heritage monuments
              with intelligent illumination. Our first landmark project — the son et lumière at a
              historic Tamil Nadu fort — set the standard for what immersive public experiences could be.
            </p>
            <p className="about-text">
              As extended reality technologies emerged, we recognized a unique opportunity to apply
              our expertise in sensory experience design to simulation and training. Today, Lux &amp; Decibels
              operates across seven specialized verticals, delivering everything from XR-based defence
              simulators to musical fountain systems — all unified by our core belief that technology
              should create genuine wonder.
            </p>
            <button className="btn-primary" style={{ marginTop: '32px' }} onClick={() => navigate('/about')}>
              Learn More <ArrowRight size={12} />
            </button>
          </div>
        </div>
        <div className="about-details-grid">
          <div className="about-detail-card">
            <h3>Our Expertise</h3>
            <p>Lux &amp; Decibels is one of the top players in planning &amp; commissioning Son et Lumiere, Intelligent Lighting Systems, Musical Fountains and Sound solutions in India.</p>
          </div>
          <div className="about-detail-card">
            <h3>Our Team</h3>
            <p>A multidisciplinary team of Engineers, Technologists, Artists, Senior Digital Experts and Consultants with many years of experience across various trades.</p>
          </div>
          <div className="about-detail-card">
            <h3>Our Approach</h3>
            <p>We participate in listening to your briefs and challenges in order to evaluate and design solutions in a complete and sustainable package for a brighter tomorrow.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
