// import '../style/Partners.css';

// import zeetv from '../assets/zeetv.png';
// import Vijay_tv_logo from '../assets/Vijay_tv_logo.png';
// import suntv from '../assets/suntv.png';
// import tn_logo from '../assets/tn_logo.png';
// import indiannavy from '../assets/indiannavy.png';
// import indian_army from '../assets/indian_army.png';
// import Asianet_logo from '../assets/Asianet_logo.png';
// import airforce_ind from '../assets/airforce_ind.png';
// import NPCIL_Logo from '../assets/NPCIL_Logo.png';
// import wbfc from '../assets/wbfc.png';
// import APTDC_Logo from '../assets/APTDC_Logo.png';
// import Telangana_Tourism from '../assets/Telangana_Tourism.png';
// import Tourism_department from '../assets/Tourism_department.png';

// const partners = [
//     { name: 'Indian Army',         logo: indian_army },
//     { name: 'Indian Navy',         logo: indiannavy },
//     { name: 'Indian Air Force',    logo: airforce_ind },
//     { name: 'Tamil Nadu Tourism',  logo: tn_logo },
//     { name: 'NPCIL',               logo: NPCIL_Logo },
//     { name: 'Tourism Department',  logo: Tourism_department },
//     { name: 'Telangana_Tourism',   logo: Telangana_Tourism },
//     { name: 'WBFC',                logo: wbfc },
//     { name: 'APTDC_Logo',          logo: APTDC_Logo },
//     { name: 'Star Vijay',          logo: Vijay_tv_logo },
//     { name: 'ZEE TV',              logo: zeetv },
//     { name: 'Sun TV',              logo: suntv },
//     { name: 'Asianet',             logo: Asianet_logo },
//     ];

// export default function Partners() {
//   return (
//     <section className="partners-section">
//       <div className="container">
//         <div className="partners-label">
//           <span className="p-line"></span>
//           <span className="dot">◆</span>
//           <span>OUR TRUSTED PARTNERS</span>
//           <span className="dot">◆</span>
//           <span className="p-line"></span>
//         </div>
//         <h2 className="partners-heading">
//           Our Valuable <span>Partners</span>
//         </h2>
//         <p className="partners-quote">
//           We collaborate with industry leaders and trusted organizations<br />
//           to deliver exceptional experiences and innovative solutions.
//         </p>

//         <div className="partners-grid">
//           {partners.map((p, i) => (
//             <div className="partner-card" key={i}>
//               <div className="partner-logo-wrap">
//                 <img src={p.logo} alt={p.name} className="partner-logo" />
//               </div>
//               <span className="partner-name">{p.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import '../style/Partners.css';

import zeetv           from '../assets/zeetv.png';
import Vijay_tv_logo   from '../assets/Vijay_tv_logo.png';
import suntv           from '../assets/suntv.png';
import tn_logo         from '../assets/tn_logo.png';
import indiannavy      from '../assets/indiannavy.png';
import indian_army     from '../assets/indian_army.png';
import Asianet_logo    from '../assets/Asianet_logo.png';
import airforce_ind    from '../assets/airforce_ind.png';
import NPCIL_Logo      from '../assets/NPCIL_Logo.png';
import wbfc            from '../assets/wbfc.png';
import APTDC_Logo      from '../assets/APTDC_Logo.png';
import Telangana_Tourism from '../assets/Telangana_Tourism.png';
import Tourism_department from '../assets/Tourism_department.png';

/* Full organisation names */
const partners = [
  /* Row 1 — 5 */
  { name: 'Indian Army',                                      logo: indian_army        },
  { name: 'Indian Navy',                                      logo: indiannavy         },
  { name: 'Indian Air Force',                                 logo: airforce_ind       },
  { name: 'Tamil Nadu Tourism',                               logo: tn_logo            },
  { name: 'Nuclear Power Corporation\nof India Limited',      logo: NPCIL_Logo         },
  /* Row 2 — 5 */
  { name: 'West Bengal Forest\nDevelopment Corporation',      logo: wbfc               },
  { name: 'Andhra Pradesh Tourism\nDevelopment Corporation',  logo: APTDC_Logo         },
  { name: 'Telangana Tourism',                                logo: Telangana_Tourism  },
  { name: 'Tourism Department\n(Experience Bengal)',          logo: Tourism_department },
  { name: 'Star Vijay',                                       logo: Vijay_tv_logo      },
  /* Row 3 — 3 centred */
  { name: 'ZEE TV',                                           logo: zeetv              },
  { name: 'Sun TV',                                           logo: suntv              },
  { name: 'Asianet',                                          logo: Asianet_logo       },
];



function PartnerCard({ p }) {
  return (
    <div className="pc">
      <div className="pc-logo-wrap">
        <img src={p.logo} alt={p.name.replace(/\n/g, ' ')} className="pc-logo" />
      </div>
      <span className="pc-name">
        {p.name.split('\n').map((line, i) => (
          <span key={i} className="pc-name-line">{line}</span>
        ))}
      </span>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="partners-section" id="partners">
      <div className="partners-container">

        {/* Header */}
        <div className="partners-label">
          <span className="pl-line" />
          <span className="pl-diamond">◆</span>
          <span>OUR TRUSTED PARTNERS</span>
          <span className="pl-diamond">◆</span>
          <span className="pl-line" />
        </div>

        <h2 className="partners-heading">
          Our Valuable <span className="partners-heading-gold">Partners</span>
        </h2>

        <p className="partners-sub">
          We collaborate with industry leaders and trusted organizations<br />
          to deliver exceptional experiences and innovative solutions.
        </p>

        {/* All Partners Grid */}
        <div className="partners-grid-new">
          {partners.map((p, i) => <PartnerCard key={i} p={p} />)}
        </div>

      </div>
    </section>
  );
}