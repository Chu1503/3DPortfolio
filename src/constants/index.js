import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  iei,
  hpe,
  nus,
  lpd,
  cinemate,
  illumina,
  webdev,
  uiux,
  data,
  ml
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "technologies",
    title: "Skills",
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
    icon: webdev,
  },
  {
    title: "UI/UX Designer",
    icon: uiux,
  },
  {
    title: "Data Analyst",
    icon: data,
  },
  {
    title: "Machine Learning Engineer",
    icon: ml,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Executive Board Member: Design Head",
    company_name: "The Institution Of Engineers India VIT",
    icon: iei,
    iconBg: "#383E56",
    date: "2022 - Present",
    text: ["Creatoverse"],
    points: [
      "Exhibited leadership and project management by handling the designathon event, acquiring expertise in event management.",
      "Demonstrated my technical expertise and worked with some of the most brilliant minds on campus through the organization of Illumina, a major hackathon conducted by VIT.",
    ],
  },
  {
    title: "Academic Intern",
    company_name: "Hewlett Packard Enterprise",
    icon: hpe,
    iconBg: "#383E56",
    date: "December 2022",
    points: [
      "Gained knowledge of Cloud Computing and utilized Microsoft Azure for the deployment of various Deep Learning models, including neural networks.",
    ],
  },
  {
    title: "DL Academic Intern",
    company_name: "National University of Singapore",
    icon: nus,
    iconBg: "#383E56",
    date: "December 2022",
    points: [
      "Acquired skills in Data Analytics and Deep Learning techniques, demonstrating proficiency through practical data analysis and obtaining an A GRADE.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "LICENSE PLATE DETECTION",
    description:
      "During my NUS internship, I collaborated with fellow interns to develop a deep neural network-based system for license plate detection along with OCR.",
    tags: [
      {
        name: "deeplearning",
        color: "blue-text-gradient",
      },
      {
        name: "dataanalysis",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: lpd,
    source_code_link: "https://github.com/",
  },
  {
    name: "CINEMATE",
    description:
      "Developed a web app that aids a group of people in selecting films together by utilizing a novel voting system and model that helps recommend movies along with an accurate where to watch feature.",
    tags: [
      {
        name: "webscraping",
        color: "blue-text-gradient",
      },
      {
        name: "apiintegration",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cinemate,
    source_code_link: "https://cinemate.co.in/",
  },
  {
    name: "ILLUMINA",
    description:
      "Designed the UI/UX and developed a website hackathon organized by my student chapter in VIT.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "parallax",
        color: "green-text-gradient",
      },
    ],
    image: illumina,
    source_code_link: "https://illumina.ieivit.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };
