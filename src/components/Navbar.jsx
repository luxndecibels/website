import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import '../style/Navbar.css';

const navLinks = ['Home', 'About', 'Services', 'Projects', 'Team', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const targetId = id.toLowerCase();
    
    if (location.pathname !== '/') {
      navigate('/#' + targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="nav-logo" onClick={() => scrollTo('home')}>
          <img src="/L&D%20LOGO%20WHITE.jpg" alt="Lux & Decibels" className="logo-img" />
        </a>
        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link}><button onClick={() => scrollTo(link)} className="nav-link">{link}</button></li>
          ))}
        </ul>
        <button className="btn-primary nav-cta" onClick={() => scrollTo('contact')}>
          Get In Touch <ArrowRight size={12} />
        </button>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="mobile-link">{link}</button>
          ))}
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Get In Touch <ArrowRight size={12} />
          </button>
        </div>
      )}
    </nav>
  );
}
