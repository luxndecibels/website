import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { services } from '../data/servicesData';
import '../style/ServiceDetail.css';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const serviceId = parseInt(id, 10);
  const currentIndex = services.findIndex(s => s.id === serviceId);
  const service = services[currentIndex];
  const nextService = services[(currentIndex + 1) % services.length];

  // Reset tab when service changes and instantly scroll to top
  useEffect(() => {
    setActiveTab(0);
    // Temporarily disable smooth scrolling to instantly jump to top
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    
    // Re-enable smooth scrolling after the jump
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 10);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="service-detail-container not-found">
        <h2>Service not found</h2>
        <button className="btn-primary" onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  const tab = service.tabs[activeTab];

  return (
    <div className="service-detail-page">
      <div className="sd-header">
        <img src={service.image} alt={service.title} className="sd-hero-img" />
        <div className="sd-hero-overlay" />
        <div className="sd-hero-content container">
          <h1 className="sd-title">{service.title}</h1>
          <p className="sd-short">{service.short}</p>
        </div>
      </div>

      <div className="sd-content container">
        {/* Tabs */}
        <div className="sd-tabs">
          {service.tabs.map((t, i) => (
            <button
              key={i}
              className={`sd-tab-btn ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Body */}
        <div className="sd-tab-body">
          <h2 className="sd-tab-heading">{tab.heading}</h2>

          {tab.content && tab.content.map((para, i) => (
            <p key={i} className="sd-para">{para}</p>
          ))}

          {tab.heading1 && <h3 className="sd-subheading">{tab.heading1}</h3>}
          {tab.list && (
            <ul className="sd-list">
              {tab.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {tab.heading2 && <h3 className="sd-subheading">{tab.heading2}</h3>}
          {tab.list2 && (
            <ul className="sd-list">
              {tab.list2.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {tab.definition && (
            <div className="sd-definition" dangerouslySetInnerHTML={{ __html: tab.definition }} />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="sd-nav-buttons" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', paddingTop: '30px', borderTop: '1px solid var(--border)' }}>
          <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => navigate('/#services')}>
            <ArrowLeft size={16} /> Back to Services
          </button>
          <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => navigate(`/service/${nextService.id}`)}>
            Next Service <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
