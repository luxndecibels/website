import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RotateCcw } from 'lucide-react';
import '../style/Projects.css';
import { allProjects, CATEGORIES } from '../data/projectsData';

// ── Card image ──────────────────────────────────
function SliderCard({ project, onClick, index }) {
  const src = project.images[0];
  const isVideo = src?.includes('.mp4') || src?.includes('.webm');

  return (
    <div
      className="proj-card"
      onClick={() => onClick(project)}
      style={{ '--delay': `${index * 60}ms` }}
    >
      <div className="proj-img-wrap">
        {isVideo ? (
          <video
            src={src}
            className="proj-img active"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={src}
            alt={project.name}
            className="proj-img active"
            loading="lazy"
          />
        )}
        <div className="proj-gradient" />
      </div>
      <div className="proj-info">
        <h3 className="proj-name">{project.name}</h3>
      </div>
    </div>
  );
}

// ── Main section ─────────────────────────────────────────────
const VISIBLE = 8;

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('lighting');
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const filtered = allProjects.filter(p => p.category === activeCategory);
  const visible = showAll ? filtered : filtered.slice(0, VISIBLE);

  function switchCategory(key) {
    setActiveCategory(key);
    setShowAll(false);
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <div className="section-label">OUR PROJECTS</div>
          <h2 className="section-title">Our Work, <span>Their Stories</span></h2>
          <p className="section-subtitle">Explore our immersive projects across Light &amp; Sound and AR/VR.</p>
        </div>

        <div className="category-tabs">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              className={`cat-tab${activeCategory === cat.key ? ' active' : ''}`}
              onClick={() => switchCategory(cat.key)}
            >
              <span className="cat-label">{cat.label}</span>
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((p, i) => (
            <SliderCard 
              key={p.id} 
              project={p} 
              index={i} 
              onClick={(project) => navigate(`/project/${project.id}`)} 
            />
          ))}
        </div>

        {filtered.length > VISIBLE && (
          <div className="load-more-wrap">
            <button className="load-more-btn" onClick={() => setShowAll(s => !s)}>
              {showAll
                ? <><RotateCcw size={14} /> Show Less</>
                : <>Load More Projects <RotateCcw size={14} /></>}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
