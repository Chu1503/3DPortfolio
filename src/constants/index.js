import {
  python,
  html,
  css,
  javascript,
  reactjs,
  tailwind,
  git,
  tensorflow,
  matlab,
  aftereffects,
  photoshop,
  figma,
  blender,
  iei,
  hpe,
  nus,
  lpd,
  cinemate,
  illumina,
  webdev,
  uiux,
  data,
  ml,
  github,
  icon_cinemate,
  icon_illumina
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
    name: "Python",
    icon: python,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
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
    name: "git",
    icon: git,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "Matlab",
    icon: matlab,
  },
  {
    name: "Aftereffects",
    icon: aftereffects,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "Executive Board Member: Design Head",
    company_name: "The Institution Of Engineers India VIT",
    icon: iei,
    iconBg: "#252424",
    date: "2022 - Present",
    text: ["Creatoverse"],
    points: [
      "Demonstrated my leadership and project management skills by handling the designathon event, acquiring expertise in event management.",
      "Demonstrated my technical expertise and worked with some of the most brilliant minds on campus through the organization of Illumina, a major hackathon conducted by VIT.",
    ],
  },
  {
    title: "Academic Intern",
    company_name: "Hewlett Packard Enterprise",
    icon: hpe,
    iconBg: "#252424",
    date: "December 2022",
    points: [
      "Gained knowledge of Cloud Computing and utilized Microsoft Azure for the deployment of various Deep Learning models, including neural networks.",
    ],
  },
  {
    title: "DL Academic Intern",
    company_name: "National University of Singapore",
    icon: nus,
    iconBg: "#252424",
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
    source_code_link: "https://github.com/Chu1503/LPD-OCR",
    icon_img: github
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
    icon_img: icon_cinemate
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
    icon_img: icon_illumina
  },
];

export { services, technologies, experiences, testimonials, projects };
