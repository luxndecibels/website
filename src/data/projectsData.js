import agsVideo from '../assets/ags.mp4';
import vrArffVideo from '../assets/VR_ARFF.mp4';
import t90Video from '../assets/T90.mp4';
import rlVideo from '../assets/RL.mp4';
import airdropVideo from '../assets/Airdrop.mp4';
import mx60rVideo from '../assets/Mx60-1.mp4';
import driving1 from '../assets/driving1.png';
import driving2 from '../assets/driving2.png';
import driving3 from '../assets/driving3.png';
import droneVideo from '../assets/drone_dev.mp4';
import srgmVideo from '../assets/SRGM.mp4';
import iccpVideo from '../assets/ICCP.mp4';
import vikrantVideo from '../assets/Vikrant.mp4';
import iglaVideo from '../assets/igla.mp4';
import purgaVideo from '../assets/purga.mp4';

import kanipakkam from '../assets/kanipakkam.png';
import kanipakkam1 from '../assets/kanipakkam1.png';
import kanipakkam2 from '../assets/kanipakkam2.png';
import defence_army from '../assets/defence_army.png';
import borra_caves from '../assets/borra_caves.png';
import chandragiri from '../assets/chandragiri.png';
import semmozhi from '../assets/semmozhi.png';
import navy from '../assets/navy.png';
import thanjavur from '../assets/thanjavur.png';
import Thanjavur1 from '../assets/Thanjavur1.png';
import thanjavur2 from '../assets/thanjavur2.png';
import defence1 from '../assets/defence4.png';
import shiva from '../assets/shiva.png';
import arvr from "../assets/ar-vr.jpeg";
import son_et_lumiere from '../assets/son_et_lumiere.png';
import event from '../assets/event.png';
import defence from '../assets/defence.png';
import indian_army from '../assets/indian_army.png';
import indiannavy from '../assets/indiannavy.png';
import chandragiri2 from '../assets/chandragiri2.png';
import chandragiri3 from '../assets/chandragiri3.png';
import borra1 from '../assets/borra1.png';
import borra2 from '../assets/borra2.png';
import semmozhi1 from '../assets/semmozhi1.png';
import semmozhi2 from '../assets/semmozhi2.png';

import behar from '../assets/behar.png';
import behar1 from '../assets/behar1.png';
import chairninar from '../assets/chairninar.png';

import golconda1 from '../assets/golconda1.png';
import katra1 from '../assets/katra1.png';
import katra2 from '../assets/katra2.png';
import katra3 from '../assets/katra3.png';
import bishnupur from '../assets/bishnupur.png';
export const CATEGORIES = [
  { key: 'lighting', label: 'Light & Sound', count: 10 },
  { key: 'arvr', label: 'AR / VR Experiences', count: 8 },
];

export const allProjects = [
  // ─── LIGHT & SOUND ───
  {
    id: 1, category: 'lighting',
    name: 'Chandragiri Fort', state: 'Andhra Pradesh', type: 'Sound & Light Show', tech: '3D Mapping, Laser, Surround Sound',
    duration: '45 Minutes', year: '2024', location: 'Andhra Pradesh',
    images: [chandragiri, chandragiri2, chandragiri3],
    overview: `Chandragiri Fort, built around 1000 AD by the Yadavaraya Kings, stands 17 km from Tirupati as one of Andhra Pradesh's most storied heritage monuments. The fort served as the fourth capital of the mighty Vijayanagara Empire and later witnessed the twilight of that great dynasty. The Raja Mahal palace within the fort — a masterpiece of Indo-Saracenic architecture — has now been transformed into an archaeological museum housing bronze sculptures and stone inscriptions dating to 2nd century BC.\n\nLux Decibels designed and executed the landmark 'Adbhuta Rupavani' Sound & Light Show, which narrates 450 years of the fort's legacy through state-of-the-art 3D projection mapping, laser systems, and surround sound. The show dramatically recreates epic battles, royal coronations, and the fort's transition through the Vijayanagara, Golconda, and Mysore dynasties. Revived with the latest Belgian technology in 2024, this 45-minute audio-visual spectacle has become one of the most celebrated heritage shows in South India.`,
  },
  {
    id: 2, category: 'lighting',
    name: 'Borra Caves', state: 'Andhra Pradesh', type: 'Dynamic Lighting Experience', tech: 'Laser Show',
    images: [borra2, borra1, borra_caves],
    overview: `Borra Caves, located in the Ananthagiri Hills of the Eastern Ghats in Visakhapatnam district, are among the largest natural cave systems in India — estimated to be around one million years old. Discovered in 1807 by British geologist William King, these limestone caverns plunge nearly 80 metres below the earth's surface and are home to extraordinary stalactite and stalagmite formations shaped by centuries of mineral-rich water flow.\n\nLux Decibels created a breathtaking dynamic lighting installation across the cave network, deploying intelligent LED systems that respond to ambient conditions and visitor movement. Each chamber is bathed in carefully chosen colour gradients that accentuate the natural formations — cream calcite pillars glowing amber, underground pools reflecting cobalt blue, and cathedral-like ceilings illuminated with warm gold. The result is an ethereal underground journey that transforms a geological wonder into a living art installation.`,
  },
  {
    id: 3, category: 'lighting',
    name: 'Semmozhi Poonga', state: 'Tamil Nadu', type: 'Sound & Light Show', tech: 'Lighting Effects',
    images: [semmozhi1, semmozhi, semmozhi2],
    overview: `Semmozhi Poonga (Classical Language Botanical Garden) is a 20-acre green sanctuary in the heart of Chennai, established by the Tamil Nadu government to commemorate the Classical Tamil Conference of 2010. Home to over 500 rare plant species including medicinal herbs, aquatic plants, and heritage trees, the garden serves as both an ecological treasure and a cultural landmark celebrating the antiquity of the Tamil language.\n\nLux Decibels brought this botanical wonderland to life after dark with a carefully designed illumination scheme that highlights the garden's architectural pavilions, water features, and rare plant collections. Vibrant RGBW lighting washes across heritage tree canopies, while precision spotlights frame the park's signature sculptures and pathways. The illumination choreography runs in synchrony with classical Tamil compositions, creating a meditative evening experience that has drawn thousands of visitors since its inauguration.`,
  },
  {
    id: 4, category: 'lighting',
    name: 'Kanipakkam Temple', state: 'Andhra Pradesh', type: 'Dynamic Lighting', tech: '3D Mapping',
    images: [kanipakkam1, kanipakkam, kanipakkam2],
    overview: `The Sri Varasiddi Vinayaka Swamy Temple at Kanipakkam, located in Chittoor district of Andhra Pradesh, is one of the most sacred and visited Ganesha shrines in South India. Dating back to the 11th century, the temple is renowned for its miraculous 'Swayambhu' (self-manifested) idol of Lord Ganesha, which according to tradition grows incrementally over time. The temple draws millions of pilgrims annually, especially during the Vinayaka Chavithi festival.\n\nLux Decibels designed an intelligent architectural lighting system for the temple complex, deploying a network of programmable LED fixtures across the gopuram, mandapam, and tank areas. The lighting design enhances the spiritual ambiance with warm golden tones during regular prayer hours and transitions to dynamic colour choreography during festival seasons. The intricate carvings on the 11th-century gopuram are highlighted through precision spotlights that reveal every sculptural detail, creating a divine visual experience for pilgrims and visitors alike.`,
  },
  {
    id: 5, category: 'lighting',
    name: 'Thanjavur Heritage', state: 'Tamil Nadu', type: 'Son et Lumière', tech: 'Projection Mapping',
    images: [thanjavur2, Thanjavur1, thanjavur],
    overview: `The Brihadeeswarar Temple at Thanjavur, a UNESCO World Heritage Site and the crown jewel of Chola architecture, was built by Emperor Raja Raja Chola I in 1010 AD. The temple's vimana tower soars 66 metres — making it one of the tallest in the world — and is capped with a massive 80-tonne granite capstone placed without the aid of ramps, a feat of ancient engineering still studied today. The temple complex encompasses intricate frescoes, bronze idols, and inscriptions that document over a thousand years of South Indian history.\n\nLux Decibels executed a grand Son et Lumière experience on the temple's exterior, using high-resolution projection mapping to bring the Chola murals and sculptures to animated life on the vimana's surface. The orchestral soundtrack weaves together Carnatic compositions, Chola-era verse, and original music, while 3D projections narrate the temple's construction, the golden age of Chola maritime power, and the emperor's legendary patronage of art and architecture. The 40-minute show runs in Tamil and English and has been hailed as one of the finest heritage illumination projects in India.`,
  },

  {
    id: 7, category: 'lighting',
    name: 'Palace of Cooch Behar', state: 'Cooch Behar, West Bengal', type: 'Water, Light, Music', tech: 'Music Sync',
    images: [behar, behar1],
    overview: `Lux Decibels designed and commissioned a spectacular musical fountain installation as part of a major urban beautification project in Telangana. The installation features 128 computer-controlled nozzles capable of shooting water jets up to 30 metres in height, choreographed in precise synchrony with a custom-composed orchestral soundtrack.\n\nThe show combines LED-lit fountain jets, underwater colour lighting, and a surround-sound audio system to create a dazzling evening spectacle. Multiple fountain patterns — from gentle floral blooms to dramatic aerial arcs — transition seamlessly through the musical score, which features classical Telugu compositions, folk melodies, and contemporary instrumental pieces. The show runs in automated cycles each evening, drawing large crowds to the waterfront location and positioning it as one of Telangana's most popular leisure destinations. The system includes weather sensors and programmable automation for year-round operation.`,
  },
  {
    id: 8, category: 'lighting',
    name: 'Charminar', state: 'Hyderabad, Telangana', type: 'Architectural Lighting', tech: 'Lighting Design',
    images: [chairninar],
    overview: `The Mysore Palace, official residence of the Wadiyar dynasty and one of the most visited monuments in India, is legendary for its festival illumination during Dasara — when over 100,000 light bulbs transform the palace into a golden beacon visible for kilometres. Built in the Indo-Saracenic style in 1912, the palace blends Hindu, Muslim, Rajput, and Gothic architectural elements in a grand 44,000 square metre complex.\n\nLux Decibels was commissioned to upgrade and modernise the palace's iconic illumination system, replacing ageing incandescent fittings with energy-efficient programmable LEDs that reproduce the warm amber glow of the original while enabling dynamic colour capabilities. The new system allows for special festival lighting sequences during Dasara and other royal occasions, with pre-programmed colour cycles that illuminate the palace's turrets, domes, and arched galleries in sequences inspired by the traditional silk weaving patterns of the region. The upgrade reduced energy consumption by over 60% while significantly enhancing the visual impact of this world-famous spectacle.`,
  },

  {
    id: 10, category: 'lighting',
    name: 'Golconda Fort', state: 'Hyderabad, Telangana', type: 'Sound & Light Show', tech: '3D Projection',
    images: [golconda1],
    overview: `Golconda Fort, an imposing medieval citadel located 11 km from Hyderabad, began as a 12th-century mud fort of the Kakatiya dynasty and was later transformed into a magnificent granite stronghold by the Qutb Shahi rulers who made it the capital of their diamond-rich kingdom. At its peak the fort was home to the world's most celebrated diamond market, where gems including the legendary Koh-i-Noor and Hope Diamond passed through its gates. The fort's acoustic engineering is legendary — a hand-clap at the base gate resonates at the peak 90 metres above.\n\nThe Golconda Sound & Light Show — believed to be among the largest of its kind in India — narrates the fort's dramatic history through projection mapping on its massive ramparts and gateways. With audio commentary by Bollywood legend Amitabh Bachchan and a soundtrack featuring compositions by Jagjit Singh and Kavita Krishnamurthy, the show brings to life the court of the Qutb Shahi sultans, the fabled diamond trade, and the fort's eventual conquest by Aurangzeb. Lux Decibels modernised the entire technical infrastructure of the show with next-generation projectors and a 7.1 surround sound system.`,
  },
  {
    id: 6, category: 'lighting',
    name: 'Katra Masjid', state: 'Murshidabad, West Bengal', type: 'Architectural Illumination', tech: 'Lighting Design',
    images: [katra1, katra2, katra3],
    overview: `Katra Masjid, built in 1723-24 by Nawab Murshid Quli Khan, is a prominent historical monument and one of the oldest mosques in Murshidabad, West Bengal. Renowned for its grand architecture and large corner minarets, it also serves as the final resting place of the Nawab.\n\nLux & Decibels designed a sophisticated architectural illumination system that elegantly highlights the majestic brickwork and imposing domes of the Katra Masjid. The intelligent lighting enhances the structural grandeur of the monument after sunset, drawing attention to its historical significance while maintaining the solemn and spiritual ambiance of the site.`,
  },
  {
    id: 9, category: 'lighting',
    name: 'Bishnupur Temples', state: 'Bankura, West Bengal', type: 'Architectural Illumination', tech: 'Dynamic Lighting',
    images: [bishnupur],
    overview: `Bishnupur, a historic town in West Bengal, is world-famous for its exquisite terracotta temples built by the Malla kings in the 17th and 18th centuries. The intricate terracotta panels narrate stories from Hindu epics and showcase the rich cultural heritage of the region.\n\nLux & Decibels brought these historical masterpieces to life with a specialized lighting project. The dynamic illumination carefully accents the detailed terracotta carvings of prominent monuments like the Rasmancha, creating a thrilling and dramatic view against the night sky. This enhanced night tourism experience allows visitors to appreciate the town's architectural marvels and deep-rooted cultural legacy in a whole new light.`,
  },

  // ─── AR / VR ───
  {
    id: 11, category: 'arvr',
    name: 'ARFF Simulation', state: 'Pan India', type: 'AR/VR Experience', tech: 'Video Simulation',
    images: [vrArffVideo],
    overview: 'Experience the highly realistic ARFF (Aircraft Rescue & Fire Fighting) Simulation video, showcasing immersive virtual reality scenarios for airport emergency response and fire containment.\n\nThis demonstration highlights the critical split-second decision-making required in active runway emergencies, giving a glimpse into our high-fidelity 3D training environments used by aviation professionals.',
  },
  {
    id: 12, category: 'arvr',
    name: 'AGS Simulation', state: 'Pan India', type: 'AR/VR Training', tech: 'Video Simulation',
    images: [agsVideo],
    overview: 'Watch the AGS (Advanced Ground Support) Simulation video, demonstrating realistic airport ground handling operations and heavy equipment maneuvering in a 3D environment.\n\nSee how trainees operate virtual pushback tugs, baggage loaders, and fuel bowsers with precision, showcasing the effectiveness of our interactive training modules for airside safety.',
  },
  {
    id: 13, category: 'arvr',
    name: 'Airdrop Experience', state: 'Pan India', type: 'AR Experience', tech: 'Augmented Reality',
    images: [airdropVideo],
    overview: 'View the Airdrop Experience video, highlighting our augmented reality platform that simulates high-altitude airborne insertion and parachute deployment with stunning realism.\n\nThis visual demonstration captures the intensity of tactical landing zone selection and spatial orientation, providing an unparalleled immersive experience for both training and public exhibitions.',
  },
  {
    id: 14, category: 'arvr',
    name: 'T90 Tank Simulator', state: 'Pan India', type: 'Driving Simulator', tech: 'Full-Motion Sim',
    images: [t90Video],
    overview: 'The T90 Tank Simulator video showcases a high-fidelity virtual environment replicating the operational behavior and tactical scenarios of the T-90 main battle tank.\n\nObserve the incredibly detailed commander and driver stations as they navigate complex terrain, demonstrating how our simulation provides a cost-effective and safe alternative to live training exercises.',
  },
  {
    id: 15, category: 'arvr',
    name: 'MH60R Sonar Simulator', state: 'Pan India', type: 'AR/VR Experience', tech: 'Mixed Reality',
    images: [mx60rVideo],
    overview: 'Experience the MH60R Sonar Simulator in action. This video demonstrates the immersive mixed-reality environment designed for complex oceanic and anti-submarine operations.\n\nWatch as crew members coordinate across sensor systems and tactical displays, highlighting the platform\'s ability to recreate realistic sea-state conditions and AI vessel traffic.',
  },
  {
    id: 16, category: 'arvr',
    name: 'Driving Simulator', state: 'Pan India', type: 'Driving Simulation', tech: 'Full-Motion Platform',
    images: [driving1, driving2, driving3],
    overview: 'Take a look at our Civilian Driving Simulator in action, featuring realistic urban and highway environments designed for safe and comprehensive driver training.\n\nThe video illustrates various scenario modules, including intersection navigation and monsoon conditions, showcasing how our full-cabin mockup prepares learners for real-world driving.',
  },
  {
    id: 17, category: 'arvr',
    name: 'RL Training System', state: 'Pan India', type: 'AR Training', tech: 'Augmented Reality',
    images: [rlVideo],
    overview: 'Watch the Reinforcement Learning (RL) Adaptive Training System video, demonstrating an advanced AR environment that dynamically adjusts scenario complexity based on user performance.\n\nThis demonstration reveals how machine learning algorithms continuously optimize the training difficulty, keeping operators in the ideal learning zone while blending virtual data with real-world awareness.',
  },
  {
    id: 18, category: 'arvr',
    name: 'Drone Simulator', state: 'Pan India', type: 'Flight Simulation', tech: 'Virtual Reality',
    images: [droneVideo],
    overview: 'The Drone Simulator video highlights realistic flight physics, diverse weather conditions, and tactical training modules for professional UAV operators.\n\nSee the integration of standard remote controllers with our virtual space, allowing trainees to practice navigation and reconnaissance missions safely before operating physical equipment.',
  },
  {
    id: 24, category: 'arvr',
    name: 'SRGM Simulator', state: 'Pan India', type: 'AR/VR Experience', tech: 'Immersive Simulator',
    images: [srgmVideo],
    overview: `The SRGM Simulator provides a state-of-the-art immersive training environment for naval gunnery and operations. Designed for realistic mission rehearsal, it features high-fidelity visual and physical interactions, allowing operators to practice complex targeting, loading, and firing procedures in a risk-free environment.\n\nDeveloped in collaboration with defence experts, the simulator ensures that personnel are fully prepared for real-world operations by replicating the precise operational mechanics and tactical challenges of the actual system.`,
  },
  {
    id: 25, category: 'arvr',
    name: 'ICCP Simulator', state: 'Pan India', type: 'AR/VR Experience', tech: 'Immersive Simulator',
    images: [iccpVideo],
    overview: 'View the ICCP Simulator video, which demonstrates a high-fidelity immersive training environment for monitoring and maintaining maritime corrosion protection systems.\n\nThis showcase emphasizes the realistic physical interactions and troubleshooting procedures operators can practice, ensuring they are fully prepared for technical challenges in real-world naval operations.',
  },
  {
    id: 26, category: 'arvr',
    name: 'Vikrant', state: 'Pan India', type: 'AR/VR Experience', tech: 'Immersive Simulator',
    images: [vikrantVideo],
    overview: 'The Vikrant Simulator video offers a virtual walkthrough of India\'s indigenous aircraft carrier, showcasing interactive training scenarios across complex ship compartments.\n\nExperience the incredibly detailed recreation of the flight deck and operational areas, illustrating how this platform enhances the situational awareness and readiness of naval crews without logistical constraints.',
  },
  {
    id: 27, category: 'arvr',
    name: 'Igla Gun Simulator', state: 'Pan India', type: 'AR/VR Experience', tech: 'Immersive Simulator',
    images: [iglaVideo],
    overview: 'Experience the Igla Gun Simulator in this video, highlighting realistic target acquisition and engagement scenarios for the Igla surface-to-air missile system.\n\nThe demonstration shows trainees tracking airborne threats under varied weather conditions, proving the effectiveness of virtual simulation for achieving high operational proficiency without live-fire expenses.',
  },
  {
    id: 28, category: 'arvr',
    name: 'Purga Operation', state: 'Pan India', type: 'AR/VR Experience', tech: 'Immersive Simulator',
    images: [purgaVideo],
    overview: 'Watch the Purga Operation Simulator video, demonstrating a highly authentic virtual environment designed for complex, high-stakes tactical training and decision-making.\n\nThis sequence captures the intense strategic coordination and rapid response required in the field, showing how our immersive solutions drastically improve operational readiness in a completely safe setting.',
  },


  // ─── DEFENCE ───
  {
    id: 19, category: 'defence',
    name: 'Indian Navy Simulator', state: 'Maharashtra', type: 'Naval Simulation', tech: 'Full-Scale Sim',
    images: [navy, indiannavy, defence_army],
    overview: `The Indian Navy Ship Handling & Tactical Simulation, developed by Lux Decibels, provides comprehensive training for naval officers in vessel navigation, fleet coordination, and tactical operations across diverse maritime environments. The simulator recreates real ocean zones including the Arabian Sea, Bay of Bengal, and Strait of Malacca with accurate bathymetric data, tidal models, and weather simulation.\n\nThe system features networked ship bridge simulators that allow multiple vessels to operate simultaneously within the same virtual ocean space, enabling realistic fleet exercise scenarios. Each bridge simulator reproduces the full instrumentation of Indian Navy vessel types, including radar, sonar, GMDSS communications, and navigation systems. Scenario modules cover port entry and departure, man-overboard procedures, anti-piracy operations, fleet replenishment at sea, and emergency damage control. The platform has been operational at a major naval training establishment and receives regular scenario updates aligned with current naval operational requirements.`,
  },
  {
    id: 20, category: 'defence',
    name: 'Indian Army Training', state: 'Pan India', type: 'Combat Simulation', tech: 'Immersive Simulation',
    images: [defence_army, indian_army, defence1],
    overview: `The Indian Army Multi-Domain Combat Simulation, developed by Lux Decibels, is a comprehensive training platform covering infantry tactics, joint arms operations, vehicle coordination, and strategic command decision-making across multiple theatre environments. The platform was developed in close collaboration with Army training establishments to ensure operational relevance and doctrinal accuracy.\n\nThe system supports networked training where multiple trainees operate simultaneously as infantry sections, vehicle crews, and command elements within the same virtual battlespace. Environments include dense urban terrain, mountain passes, desert plains, and jungle zones, each with accurate terrain data and environmental conditions. AI opponent forces adapt to trainee actions, providing realistic adversarial challenge. The platform incorporates After Action Review tools that allow instructors to replay any portion of the exercise from any perspective, enabling detailed tactical debriefing. Deployed across multiple Army Commands, the system supports training from section-level tactics up to battalion-level exercises.`,
  },
  {
    id: 21, category: 'defence',
    name: 'Indian Air Force Sim', state: 'Pan India', type: 'Aerial Simulation', tech: 'Flight Simulation',
    images: [defence1, defence, arvr],
    overview: `The Indian Air Force Mission Rehearsal & Procedure Trainer, developed by Lux Decibels, provides a high-fidelity simulation environment for IAF pilots and crew across multiple aircraft mission profiles. The platform bridges the gap between basic flight training simulators and actual mission operations, enabling pilots to rehearse complex sorties, instrument procedures, and emergency responses without operational risk or cost.\n\nThe system models multiple Indian terrain environments with accurate elevation data, featuring airports and airfields across India and surrounding regions. Mission scenario packages cover cross-country navigation, formation flying, instrument approach procedures in adverse weather, engine failure management, and tactical mission profiles. The visual system delivers high-resolution imagery across a wide field-of-view to provide realistic spatial orientation cues. The platform also includes a crew resource management training module designed to develop communication and decision-making skills between pilot and crew — a critical factor in aviation safety. The trainer has been evaluated and endorsed by IAF training command for supplementary procedural training.`,
  },
  {
    id: 22, category: 'defence',
    name: 'NPCIL Safety System', state: 'Pan India', type: 'Safety Simulation', tech: 'VR Training',
    images: [navy, defence1, arvr],
    overview: `The Nuclear Power Corporation of India Limited (NPCIL) Safety Training Simulation, developed by Lux Decibels, provides immersive VR-based training for plant personnel in emergency response procedures, operating protocols, and safety-critical decision-making. Nuclear plant operations demand the highest standards of procedural adherence — and the consequences of errors make live-environment training impractical for many scenarios.\n\nThe simulation recreates the interior environments of NPCIL's pressurised heavy water reactor plants in photorealistic 3D, including control rooms, reactor buildings, turbine halls, and auxiliary systems areas. Training modules cover normal operating procedures, abnormal event management, emergency core cooling activation, and severe accident response — drawn directly from NPCIL's operational procedures. VR headsets provide complete spatial immersion, while instrumented panel replicas allow trainees to operate actual control layouts. Post-exercise reviews compare trainee actions against established procedures, generating detailed competency reports for certification tracking. The system meets the regulatory requirements for accredited nuclear training under the Atomic Energy Regulatory Board's guidelines.`,
  },

  {
    id: 23, category: 'defence',
    name: 'Award-Winning Exhibit', state: 'New Delhi', type: 'Exhibition Design', tech: 'Interactive Display',
    images: [defence1, arvr, defence_army],
    overview: `Lux Decibels designed and built an internationally recognised defence expo exhibition stand that earned the Best Exhibition Design award at DefExpo 2023, India's premier biennial defence and aerospace exhibition held in Gandhinagar, Gujarat. The exhibit showcased the company's full portfolio of simulation, immersive technology, and heritage lighting capabilities to an audience of defence ministries, armed forces representatives, and industry leaders from over 75 countries.\n\nThe stand featured live AR demonstrations, interactive simulation pods where visitors could experience training scenarios first-hand, and a large-format projection wall displaying project reels from the company's defence and heritage portfolio. The spatial design used a dramatic dark interior with gold accent lighting — reflecting Lux Decibels' signature visual language — with clearly delineated zones for simulation products, heritage lighting, and AR/VR solutions. The stand's innovative visitor experience design and integration of live interactive elements were cited by the jury as key factors in awarding it the top recognition among over 400 exhibiting companies.`,
  },
];
