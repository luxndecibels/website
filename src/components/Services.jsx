import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/servicesData';
import '../style/Services.css';

export default function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-label">WHAT WE DO</div>
          <h2 className="section-title">Our Core <span>Services</span></h2>
          <p className="section-subtitle">
            We combine cutting-edge technologies and creative innovation to deliver
            immersive experiences that inspire, train, and transform.
          </p>
        </div>

        {/* Top 4 cards */}
        <div className="services-grid">
          {services.map((svc) => (
            <div key={svc.id} className="service-card" onClick={() => navigate(`/service/${svc.id}`)}>
              <div className="svc-img-wrap">
                <img src={svc.image} alt={svc.title} className="svc-img" />
                <div className="svc-overlay" />
              </div>
              <div className="svc-body">
                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-short">{svc.short}</p>
                {svc.subItems && (
                  <div className="svc-sub-list">
                    {svc.subItems.map((item, idx) => (
                      <div key={idx} className="svc-sub-list-item">
                        <span className="svc-sub-list-title">{item.title}:</span> <span className="svc-sub-list-desc">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                )}
                <button className="svc-btn">Learn More <ArrowRight size={12} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
