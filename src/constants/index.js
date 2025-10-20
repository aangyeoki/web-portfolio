import {
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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };