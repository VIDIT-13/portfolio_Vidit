export const myProjects = [
  {
    id: 1,
    title: "AutoGrad",
    description:
      "An AI-powered platform that automates assignment grading and delivers personalized feedback for students.",
    subDescription: [
      "Integrated OCR to scan handwritten sheets and generate feedback.",
      "Implemented JWT-based secure authentication and role-based access for faculty.",
      "Developed using MERN stack with real-time progress tracking.",
      "Enhanced UI with TailwindCSS for better user experience.",
    ],
    href: "https://github.com/VIDIT-13/classroom-assistant-master-2",
    logo: "",
    image: "/assets/projects/autograd.jpeg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "JWT", path: "/assets/logos/jwt.svg" },
    ],
  },
  {
    id: 2,
    title: "Rock Alert",
    description:
      "A real-time disaster alert and safety system that detects earthquakes and rockfalls, instantly notifying users in nearby zones.",
    subDescription: [
      "Implemented real-time rockfall detection using motion and vibration sensor data integrated via APIs.",
      "Built real-time earthquake detection using seismological APIs for instant hazard recognition.",
      "Integrated live alert notifications using Firebase Cloud Messaging and location-based triggers.",
      "Developed an interactive dashboard to visualize hazard zones, alert intensity, and historical data.",
      "Developed using the MERN stack with TailwindCSS and map-based data visualization for alert regions.",
    ],
    href: "https://github.com/VIDIT-13/Rock-Alert", // update if your repo link differs
    logo: "",
    image: "/assets/projects/rockalert.jpeg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.svg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwind.svg" },
    ],
  },
  {
    id: 3,
    title: "Cognify",
    description:
      "A neurodivergent support platform that helps assess and assist individuals with ADHD, Autism, and Dyslexia.",
    subDescription: [
      "Includes diagnostic tools, behavior questionnaires, and research-backed games.",
      "JWT-based secure login system with gamified dashboard.",
      "Built with MERN stack and features reward-based shop and leaderboards.",
      "Responsive UI for both parents and educators.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/cognify.jpeg",
    tags: [
      { id: 1, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 2, name: "Express", path: "/assets/logos/Express.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "JWT", path: "/assets/logos/jwt.svg" },
    ],
  },
  {
    id: 4,
    title: "Chattrix",
    description:
      "A real-time chat application using Stream for seamless messaging and notifications.",
    subDescription: [
      "Real-time chat interface using Stream Chat API.",
      "JWT-secured authentication system.",
      "Built with React and styled using TailwindCSS.",
      "Supports group and individual conversations with message history.",
    ],
    href: "https://chattrix-k1au.onrender.com",
    logo: "",
    image: "/assets/projects/chattrix.jpeg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Stream", path: "/assets/logos/stream.svg" },
      { id: 3, name: "JWT", path: "/assets/logos/jwt.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 5,
    title: "Bhagavad Gita Web App",
    description:
      "An interactive app for exploring verses and chapters of the Bhagavad Gita.",
    subDescription: [
      "Fetches data from a Bhagavad Gita API in real time.",
      "Responsive layout with TailwindCSS.",
      "Clean navigation and reading experience built using React.",
      "Lightweight and optimized for speed.",
    ],
    href: "https://github.com/VIDIT-13/All-Js-related-projects-",
    logo: "",
    image: "/assets/projects/gita.jpeg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "API", path: "/assets/logos/api.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 6,
    title: "MacBook M4 Landing Page",
    description:
      "A 3D product landing page showcasing Apple MacBook M4 using animations.",
    subDescription: [
      "Scroll-based animation powered by GSAP and Three.js.",
      "Clean, minimalist UI using TailwindCSS.",
      "Fully responsive with interactive 3D model.",
    ],
    href: "https://github.com/VIDIT-13/All-Js-related-projects-",
    logo: "",
    image: "/assets/projects/macbook.jpeg",
    tags: [
      { id: 1, name: "Three.js", path: "/assets/logos/threejs.svg" },
      { id: 2, name: "GSAP", path: "/assets/logos/gsap.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 7,
    title: "Weather Web App",
    description:
      "A real-time weather app that provides temperature, wind speed, and humidity based on your location.",
    subDescription: [
      "Integrated OpenWeatherMap API for dynamic data.",
      "React-based frontend with intuitive UX.",
      "Optimized for mobile and desktop views.",
    ],
    href: "https://github.com/VIDIT-13/All-Js-related-projects-",
    logo: "",
    image: "/assets/projects/weatherweb.jpeg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "API", path: "/assets/logos/api.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
];

export const experiences = [
  {
    title: "Deloitte — Virtual Internship",
    job: "Deloitte",
    date: "January 2024 - March 2024",
    contents: [
      "Completed Deloitte's virtual internship program focused on business consulting and technology.",
      "Worked on case studies to analyze business problems and propose technology-driven solutions.",
      "Learned best practices for stakeholder communication, data-driven decision making, and solution design.",
      "Prepared client-ready presentations and delivered recommendations to mentors.",
    ],
  },
  {
    title: "Software Developer Intern",
    job: "Innocrede Solutions",
    date: "April 2024 - August 2024",
    contents: [
      "Built frontend features using React and TailwindCSS and integrated them with Node.js APIs.",
      "Implemented REST API integrations, improved application performance, and fixed bugs.",
      "Wrote unit tests and contributed to CI/CD workflows for smoother deployments.",
      "Collaborated in Agile sprints with cross-functional teams and participated in code reviews.",
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/vidit-30913a293/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/viditallen/buying?source=avatar_menu_profile",
    icon: "assets/socials/fiverr.svg",
  },
  {
    name: "Github",
    href: "https://github.com/VIDIT-13/",
    icon: "/assets/socials/githubwhite.svg",
  },
];
