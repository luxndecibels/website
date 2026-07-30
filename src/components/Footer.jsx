import { ExternalLink, PlayCircle, AtSign } from 'lucide-react';
import '../style/Footer.css';

const services = ['AR/VR/MR/AI', 'Defence Simulators', 'Virtual Flight Simulations', 'Naval Simulations', 'Dynamic Lighting', 'Sound & Light Shows', 'Mid Air Projections'];
const links = ['Home', 'About', 'Services', 'Projects', 'Team', 'Contact'];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logowhit.png" alt="Lux & Decibels" className="footer-logo-img" />
          </div>
          <p className="footer-brand-desc">
            Crafting immersive experiences with light, sound, technology and innovation.
            Serving defence, tourism, and entertainment sectors across India.
          </p>
          <div className="footer-socials">
            <a href="#" className="footer-social"><ExternalLink size={15} /></a>
            <a href="#" className="footer-social"><PlayCircle size={15} /></a>
            <a href="#" className="footer-social"><AtSign size={15} /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">QUICK LINKS</h4>
          <ul className="footer-list">
            {links.map(l => (
              <li key={l}>
                <button onClick={() => scrollTo(l)} className="footer-link">{l}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">OUR SERVICES</h4>
          <ul className="footer-list">
            {services.map(s => (
              <li key={s}><button onClick={() => scrollTo('services')} className="footer-link">{s}</button></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">OPERATIONAL OFFICES</h4>
          <ul className="footer-list">
            <li><span className="footer-link" style={{ cursor: 'default' }}>Bengaluru</span></li>
            <li><span className="footer-link" style={{ cursor: 'default' }}>Hyderabad</span></li>
            <li><span className="footer-link" style={{ cursor: 'default' }}>Visakhapatnam</span></li>
            <li><span className="footer-link" style={{ cursor: 'default' }}>Kolkata</span></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-col-title">CONTACT INFO</h4>
          <div className="footer-contact">
            <p>+91 98410 08510</p>
            <p>+91 44 26253171</p>
            <p>support@luxanddecibels.in</p>
            <p>No 1, Annexe New KG Street,<br />Mathialagan Nagar, Padi,<br />Chennai – 600 050,<br />Tamil Nadu, India.</p>
            <p>www.luxanddecibels.in</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2024 Lux &amp; Decibels. All Rights Reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}