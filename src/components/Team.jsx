import '../style/Team.css';
import shiva from '../assets/shiva.png';
import bart from '../assets/bart.png';

const founders = [
  {
    name: 'Shiva Pillai',
    role: 'Principal Consultant',
    photo: shiva,
    bio: [
      'L&D is the brainchild of Mr. Shiva Pillai, a Mathematics graduate and MBA from University of Madras, with two decades of experience in intelligent light and sound technologies, immersive experiences, and innovative project execution.',
      'The changes and uncertainty brought on by the COVID-19 pandemic upset the order of many people\'s lives. But the truth is every situation in life gives us a purpose to survive and an opportunity to excel.',
      'He was awarded the Lighting Designer of the Year in 2006 and the Best Principal Consultant at WBTDC for sustained glitch-free project ideation, visualization, and execution.',
    ],
    stats: [
      { label: '20+ Years Experience' },
      { label: 'Lighting & Sound Specialist' },
      { label: 'Immersive Tech Expert' },
    ],
  },
  {
    name: 'Bart Hemelaer',
    role: 'International Principal Consultant',
    photo: bart,
    bio: [
      'Bart Hemelaer started off in 1993 as a lighting designer in Belgium, providing design and execution of many pubs, discotheques and Music festivals.',
      'He was hired by Martin Professional Lighting and posted in India as CTO to reorganize the technical operations for them at the age of 25. He was solely responsible for the Channel V music awards and many projects of repute across the globe.',
      'Today Bart is the International Principal Consultant for L&D, implementing new techniques, company segments and divisions.',
    ],
    stats: [
      { label: '30+ Years Experience' },
      { label: 'Lighting Designer' },
      { label: 'Entertainment Industry Expert' },
    ],
  },
];

const team = [
  {
    name: 'Ravi Kumar R',
    role: 'CEO',
    content: 'Ravi started his career with a passion for events and worked in the production and technical division with one of South India\'s oldest event management companies. He led events and sports operations for Sahara Group across India and international markets, handling IPL, Hockey India League, Badminton League, and Sahara Force India projects. He is a consultant in entertainment, sports, VR & AR, sound, and lighting projects globally. With over 25 years of industry experience, Ravi currently serves as the CEO of L&D.',
  },
  {
    name: 'Purnima Nayanar',
    role: 'Creative Head',
    content: 'Purnima Nayanar is a fashion designer from NIFT Bangalore with a strong passion for creative design and immersive visual experiences. Her journey evolved from fashion design into graphics and extended reality solutions, where she specialized in lighting-based visual concepts, complex animations, 3D working models, and graphic rendering. She currently heads the creative department of L&D.',
  },
  {
    name: 'Yugander RJ',
    role: 'Chief Design Consultant',
    content: `Yugander RJ is a creative technology professional with over 25 years of experience spanning photography, cinematography, television production, broadcast graphics, animation, VFX supervision, colour grading, and film editing. He has consistently delivered innovative multimedia solutions across television, film, advertising, and immersive technology domains.

As Chief Design Consultant at Lux & Decibels (L&D), he leads the development of AR, VR, MR, AI-driven applications, digital twins, and interactive simulation solutions for defence, education, industry, and entertainment sectors, integrating creative vision with advanced technology to deliver high-impact digital experiences.`,
  },
];

export default function Team() {
  return (
    <section id="team" className="team-section">
      <div className="team-container">

        {/* ── Section Header ── */}
        <div className="team-label">
          <span className="team-label-line" />
          OUR LEADERSHIP TEAM
          <span className="team-label-line" />
        </div>
        <h2 className="team-heading">
          Meet the experts driving <em className="team-heading-em">innovation</em>
        </h2>
        <p className="team-subheading">
          Decades of combined experience in lighting, sound, immersive technology
          and project execution across the globe.
        </p>

        {/* ── Principal Founders ── */}
        <div className="founders-grid">
          {founders.map((f, i) => (
            <div key={i} className="founder-card">

              {/* Top: photo block */}
              <div className="founder-photo-block">
                <img src={f.photo} alt={f.name} className="founder-img" />
                <div className="founder-id">
                  <h3 className="founder-name">{f.name}</h3>
                  <span className="founder-role">{f.role}</span>
                </div>
              </div>

              {/* Bio */}
              <div className="founder-bio-block">
                {f.bio.map((para, j) => (
                  <p key={j} className="founder-bio">{para}</p>
                ))}
              </div>

              {/* Stats bar */}
              <div className="founder-stats">
                {f.stats.map((s, j) => (
                  <div key={j} className="stat-item">
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* ── Team Grid ── */}
        <div className="team-grid">
          {team.map((member, i) => (
            <div key={i} className="team-card">
              <div className="team-card-top-bar" />
              <h3 className="team-name">{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-content">{member.content}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
