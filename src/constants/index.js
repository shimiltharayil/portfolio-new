import {
  mobile,
  backend,
  creator,
  web,
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
  threejs,
  solidity,
  papafam,
  mosh,
  udemy,
  brototype,
  Airbnb,
  Netflix,
  Medium
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI / UX Designer",
    icon: creator,
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
    name: "solidity",
    icon: solidity,
  },
];

const educations = [
  {
    title: "Basic Web developement",
    company_name: "Brototype",
    icon: brototype,
    iconBg: "#383E56",
    date: "May 2022 - Jun 2022",
    points: ["Learnt Basics of Web Development"],
  },
  {
    title: "Advanced Web development",
    company_name: "Udemy",
    iconBg: "#383E56",
    icon: udemy,
    date: "June 2022 - Aug 2022",
    points: [
      "Learnt the latest technologies, including Javascript, React, Node and even Web3 development.",
      "Completed  16 web development projects",
    ],
  },
  {
    title: "React-Native",
    company_name: "Mosh",
    iconBg: "#383E56",
    icon: mosh,

    date: "Dec 2022 - Dec 2022",
    points: [
      "Learnt Basics and advanced of Ract Native , builded a Full Stack Mobile App ",
    ],
  },
  {
    title: "Zero To Full Stack Hero ",
    company_name: "Sonny Sangha",
    iconBg: "#383E56",
    icon: papafam,

    date: "Feb 2022 - ",
    points: [
      "This course is designed to cover ALL elements of Web development, including Frontend technologies, Backend technologies & Everything in between!",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Airbnb-Clone",
    description:
      "Web-based platform that allows users to search, book, and manage rooms from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity CMS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Airbnb,
    source_code_link: "https://github.com/shimiltharayil/airbnb",
  },
  {
    name: "Nextflix",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: Netflix,
    source_code_link: "https://github.com/shimiltharayil?tab=repositories",
  },
  {
    name: "Medium",
    description:
      " platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image:Medium,
    source_code_link:
      "https://github.com/shimiltharayil/medium-clone-completed",
  },
];

export { services, technologies, educations, testimonials, projects };
