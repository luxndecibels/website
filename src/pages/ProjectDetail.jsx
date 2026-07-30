import { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronRight, Phone, X, ChevronLeft } from 'lucide-react';
import { allProjects } from '../data/projectsData';
import '../style/ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxMedia, setLightboxMedia] = useState(null);
  const projectId = parseInt(id, 10);
  const project = allProjects.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="pd-not-found container">
        <h2>Project not found</h2>
        <button className="btn-primary" onClick={() => navigate('/')}>Return Home</button>
      </div>
    );
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = allProjects
    .filter(p => p.category === project.category && p.id !== project.id);
  
  const relatedScrollRef = useRef(null);
  const scrollRelated = (dir) => {
    if (relatedScrollRef.current) {
      // scroll by approx one card width + gap
      relatedScrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="pd-page">
      <div className="container">
        {/* Breadcrumbs */}
        <div className="pd-breadcrumbs">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to="/#projects">Projects</Link>
          <ChevronRight size={14} />
          <span className="pd-current">{project.name}</span>
        </div>

        {/* Hero Section */}
        <div className="pd-hero">
          <div className="pd-hero-img-wrap">
            {(project.images[0]?.includes('.mp4') || project.images[0]?.includes('.webm')) ? (
              <video src={project.images[0]} autoPlay muted loop playsInline className="pd-main-img" />
            ) : (
              <img src={project.images[0]} alt={project.name} className="pd-main-img" />
            )}
          </div>
          <div className="pd-hero-content">
            <div className="pd-state">{project.state}</div>
            <h1 className="pd-title">{project.name}</h1>
            <p className="pd-subtype">{project.type}</p>
            {project.overview && (
              <div className="pd-short-desc">
                {project.overview.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Gallery section */}
        {project.category !== 'arvr' && (
          <div className="pd-section pd-gallery-section">
            <h2 className="pd-section-title">GALLERY</h2>
            <div className="pd-gallery-grid">
              {project.images.map((src, i) => {
                const isVideo = src?.includes('.mp4') || src?.includes('.webm');
                return (
                  <div key={i} className="pd-gallery-item" onClick={() => setLightboxMedia(src)}>
                    {isVideo ? (
                      <video src={src} autoPlay muted loop playsInline />
                    ) : (
                      <img src={src} alt={`${project.name} ${i + 1}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Related Projects section */}
        {relatedProjects.length > 0 && (
          <div className="pd-section pd-related-section">
            <h2 className="pd-section-title">RELATED PROJECTS</h2>
            <div className="pd-related-slider-wrap">
              <button className="pd-related-arrow left" onClick={() => scrollRelated(-1)}>
                <ChevronLeft size={20} />
              </button>
              <div className="pd-related-grid" ref={relatedScrollRef}>
                {relatedProjects.map(rp => (
                  <div key={rp.id} className="pd-related-card" onClick={() => navigate(`/project/${rp.id}`)}>
                    {(rp.images[0]?.includes('.mp4') || rp.images[0]?.includes('.webm')) ? (
                      <video src={rp.images[0]} autoPlay muted loop playsInline />
                    ) : (
                      <img src={rp.images[0]} alt={rp.name} />
                    )}
                    <div className="pd-related-info">
                      <h3 className="pd-related-name">{rp.name}</h3>
                      <p className="pd-related-state">{rp.state}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="pd-related-arrow right" onClick={() => scrollRelated(1)}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* CTA Banner */}
        <div className="pd-cta-banner">
          <div className="pd-cta-left">
            <div className="pd-cta-icon-wrap">
              <Phone size={24} color="#f5b026" />
            </div>
            <div className="pd-cta-text">
              <h3>Have a Project in Mind?</h3>
              <p>Let's create immersive experiences together.</p>
            </div>
          </div>
          <button className="btn-primary" onClick={() => navigate('/#contact')}>
            GET IN TOUCH →
          </button>
        </div>

        {/* Lightbox Modal */}
        {lightboxMedia && (
          <div className="pd-lightbox" onClick={() => setLightboxMedia(null)}>
            <button className="pd-lightbox-close" onClick={() => setLightboxMedia(null)}>
              <X size={20} />
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              {(lightboxMedia.includes('.mp4') || lightboxMedia.includes('.webm')) ? (
                <video src={lightboxMedia} controls autoPlay className="pd-lightbox-content" />
              ) : (
                <img src={lightboxMedia} alt="Gallery Enlarge" className="pd-lightbox-content" />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
