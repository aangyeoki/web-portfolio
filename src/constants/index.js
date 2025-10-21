import {
  blcu,
  csc,
  ecomp,
  fe,
  fl,
  flpeeps,
  fp,
  hackathon, 
  komdigi,
  sap,
  techup,
  tiroid, 
  xlungs,
  newmeow,
  lexipal, 
  diamondcut,
  twtdash,
  cproj,
  spark,
  hadoop,
  c,
  r,
  python,
  mysql,
  penabur,
  tfi,
  bnec,
  ureeka, 
  bncc,
  binus,
  netsec,
  datsci,
  danal,
  web,  
  bigdata, 
  javascript,
  html,
  css,
  reactjs,
  tailwind, 
  git,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experiences",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: datsci,
  },
  {
    title: "Data Analyst",
    icon: danal,
  },
  {
    title: "Big Data Engineer",
    icon: bigdata,
  },
  {
    title: "Network Security",
    icon: netsec,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Hadoop",
    icon: hadoop,
  },
  {
    name: "Spark",
    icon: spark,
  },
];

const experiences = [
  {
    title: "Mentor Scholarship",
    company_name: "Bina Nusantara University",
    icon: binus,
    iconBg: "#383E56",
    date: "August 2025 - Present",
    points: [
      "Lead small study groups and tutoring sessions to help peers grasp challenging concepts.",
      "Prepare and deliver review materials, encourage peer discussion, and guide exercises",
      "Handle reporting and coordination tasks via BINUSMAYA and Mentor Sharing platforms.",
      "Developed strong communication, mentoring, and leadership skills through regular academic facilitation.",
    ],
  },
  {
    title: "Core Team",
    company_name: "UREEKA",
    icon: ureeka,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "R&D Division: Created educational resources and facilitated peer trainings related to software engineering.",
      "Worked collaboratively on software projects that enhance technical skills and analytical thinking.",
      "Creative Team: Managed promotional campaigns and social media content, building partnerships with external organizations.",
      "Strengthened teamwork, project management, and technical writing for tech education.",
    ],
  },
  {
    title: "External Event Organizer",
    company_name: "Bina Nusantara Computer Club",
    icon: bncc,
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Media and Publication Staff: Created visual content and led social media storytelling.",
      "Event Staff: Oversaw event setup and execution under tight deadlines.",
      "Sponsorship Staff: Managed outreach to partners and sponsors, built negotiation confidence, and developed stakeholder communication.",
    ],
  },
  {
    title: "Freshmen Partner",
    company_name: "Bina Nusantara University",
    icon: binus,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - June 2025",
    points: [
      "Served as a long-term peer mentor for first-year students, helping them adapt academically, socially, and emotionally to university life.",
      "Be their trusted companion and listener, conducting casual counseling-like sessions to guide students through challenges and encourage self-confidence.",
      "Supported their academic progress, shared study tips, and provided feedback based on personal experience.",
    ],
  },
  {
    title: "Finance Staff",
    company_name: "Bina Nusantara English Club",
    icon: bnec,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Jan 2025",
    points: [
      "Negotiated sponsorships and collaborated with corporate partners to fund events.",
      "Managed financial planning and budget allocation.",
      "Developed strong persuasive communication, organizational, and leadership skills.",
    ],
  },
  {
    title: "Cyber Security Teacher",
    company_name: "Teach for Indonesia",
    icon: tfi,
    iconBg: "#E6DEDD",
    date: "Sept 2024 - Oct 2024",
    points: [
      "Delivered cybersecurity awareness sessions to students.",
      "Designed engaging teaching materials to explain technical content accessibly.",
      "Strengthened public speaking and technical presentation skills.",
    ],
  },
  {
    title: "Freshmen Leader",
    company_name: "Bina Nusantara University",
    icon: binus,
    iconBg: "#E6DEDD",
    date: "July 2024 - Sept 2024",
    points: [
      "Accompanied freshman during orientation, guiding them through university introduction events.",
      "Ensured participants’ comfort and discipline during activities while fostering a welcoming environment.",
      "Collaborated with fellow leaders to manage group logistics and deliver key onboarding messages.",
    ],
  },
  {
    title: "Event Lecturer Assistant",
    company_name: "Bina Nusantara University",
    icon: binus,
    iconBg: "#E6DEDD",
    date: "April 2024 - May 2024",
    points: [
      "Assisted lecturers in preparing materials, monitoring attendance, and managing class activities.",
      "Supported students with clarifications during sessions.",
      "Strengthened multitasking, teamwork, and academic facilitation skills.",
    ],
  },
  {
    title: "Civics Teacher",
    company_name: "Teach for Indonesia",
    icon: tfi,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Feb 2024",
    points: [
      "Taught civics lessons to elementary and kindergarten students.",
      "Simplified complex civic concepts into age-appropriate learning materials.",
      "Enhanced clarity in communication and classroom leadership.",
    ],
  },
  {
    title: "Secretary of The Last Night",
    company_name: "SMAK Penabur Gading Serpong",
    icon: penabur,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - May 2023",
    points: [
      "Coordinated scheduling, logistics, and communication with vendors and sponsors.",
      "Documented meeting minutes and oversaw event progress tracking.",
      "Improved time management, negotiation, and organizational planning.",
    ],
  },
  {
    title: "Master of Ceremony of Education Fair",
    company_name: "SMAK Penabur Gading Serpong",
    icon: penabur,
    iconBg: "#E6DEDD",
    date: "July 2022 - Sept 2022",
    points: [
      "Served as Master of Ceremonies, hosting live segments and managing audience engagement.",
      "Built confidence in real-time adaptability, improvisation, and public speaking.",
    ],
  }
];

const projects = [
  // {
  //   name: "C Algorithm Project",
  //   description:
  //     "Applied structured programming in C to solve computational problems involving string manipulation, data processing, and file handling. Built a CSV data utility and modular functions for reading, searching, sorting, and exporting datasets.",
  //   tags: [
  //     { name: "C", color: "blue-text-gradient" },
  //     { name: "algorithm-design", color: "green-text-gradient" },
  //     { name: "file-handling", color: "pink-text-gradient" },
  //   ],
  //   image: cproj,
  //   source_code_link: "https://github.com/aangyeoki/SEMS1-CProject.git",
  // },
  {
    name: "TwitterDash",
    description:
      "Lightweight web app simulating a Twitter/X posting system using HTML, CSS, and JavaScript. Implemented JSON as mock database and built a responsive interface focusing on UI/UX principles for user engagement.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: twtdash,
    source_code_link: "https://github.com/aangyeoki/suksesbkintwt.git",
  },
  {
    name: "DiamondCut",
    description:
      "Multi-page luxury car showcase website with interactive UI components such as image sliders, car filtering, brand carousel, and showroom gallery. Focused on consistent UX design using HTML, CSS, and JavaScript with ScrollReveal.js and Ionicons.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "scrollreveal", color: "orange-text-gradient" },
    ],
    image: diamondcut,
    source_code_link: "https://github.com/aangyeoki/DiamondCutHCI.git",
  },
  {
    name: "LexiPal",
    description:
      "AI-powered reading assistant web app built with Flask, HTML, CSS, and JavaScript. Integrated emotion recognition (LSTM) and emotional text-to-speech (Tacotron2) for an inclusive reading experience designed for individuals with dyslexia.",
    tags: [
      { name: "flask", color: "blue-text-gradient" },
      { name: "LSTM", color: "green-text-gradient" },
      { name: "tacotron2", color: "pink-text-gradient" },
    ],
    image: lexipal,
    source_code_link: "https://github.com/aangyeoki/LexiPal.git",
  },
  {
    name: "NewMeow",
    description:
      "Modern e-commerce platform for cat adoption built with Next.js, TypeScript, and TailwindCSS. Implemented Firebase for authentication and real-time database to support interactive and dynamic user experience.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "firebase", color: "orange-text-gradient" },
    ],
    image: newmeow,
    source_code_link: "https://github.com/StyNW7/RnD-Ureeka.git",
  },
  {
  name: "X-LUNGS",
  description:
    "AI-powered web application for detecting lung diseases (Pneumonia, COVID-19, Fibrosis, and Tuberculosis) from chest X-ray images. Developed with Laravel for backend, integrated with Google Vertex AI’s Gemini model for image-text reasoning, and equipped with authentication, upload, and patient history management features.",
  tags: [
    { name: "laravel", color: "blue-text-gradient" },
    { name: "vertexai", color: "green-text-gradient" },
    { name: "gemini", color: "pink-text-gradient" },
    { name: "mysql", color: "orange-text-gradient" },
    { name: "google-cloud", color: "purple-text-gradient" },
  ],
  image: xlungs,
  source_code_link: "https://github.com/aangyeoki/XLUNGS.git",
},
{
    name: "Predictive Analysis - Thyroid Disease",
    description:
      "Developed a predictive model using stacking ensemble (XGBoost, CatBoost, GradientBoost) optimized with Optuna. Conducted data cleaning, EDA, and validation, achieving 98.5% accuracy for thyroid disease classification.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "xgboost", color: "green-text-gradient" },
      { name: "catboost", color: "pink-text-gradient" },
      { name: "optuna", color: "orange-text-gradient" },
    ],
    image: tiroid,
    source_code_link:
      "https://github.com/aangyeoki/Predictive-Analysis-Tiroid-Disease.git",
  },
];

const certificates = [
  { img: blcu },
  { img: csc },
  { img: ecomp },
  { img: fe },
  { img: fl },
  { img: flpeeps },
  { img: fp },
  { img: hackathon },
  { img: komdigi },
  { img: sap },
  { img: techup },
];

export { services, technologies, experiences, projects , certificates };