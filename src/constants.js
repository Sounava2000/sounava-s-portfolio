// Skills Section Logo's
import htmlLogo from "./assets/Tech_Logo/html.png";
import cssLogo from "./assets/Tech_Logo/css.png";
import javascriptLogo from "./assets/Tech_Logo/javascript.png";
import reactjsLogo from "./assets/Tech_Logo/reactjs.png";
import reduxLogo from "./assets/Tech_Logo/redux.png";
import tailwindcssLogo from "./assets/Tech_Logo/tailwindcss.png";
import gsapLogo from "./assets/Tech_Logo/gsap.png";
import materialuiLogo from "./assets/Tech_Logo/materialui.png";
import bootstrapLogo from "./assets/Tech_Logo/bootstrap.png";
import nodejsLogo from "./assets/Tech_Logo/nodejs.png";
import expressjsLogo from "./assets/Tech_Logo/express.png";
import mysqlLogo from "./assets/Tech_Logo/mysql.png";
import mongodbLogo from "./assets/Tech_Logo/mongodb.png";
import cLogo from "./assets/Tech_Logo/c.png";
import cppLogo from "./assets/Tech_Logo/cpp.png";
import javaLogo from "./assets/Tech_Logo/java.png";
import gitLogo from "./assets/Tech_Logo/git.png";
import githubLogo from "./assets/Tech_Logo/github.png";
import vscodeLogo from "./assets/Tech_Logo/vscode.png";
import postmanLogo from "./assets/Tech_Logo/postman.png";
import mcLogo from "./assets/Tech_Logo/mc.png";

import renderLogo from "./assets/Tech_Logo/render-logo.png";

import vercelLogo from "./assets/Tech_Logo/vercel-logo.png";
import phpLogo from "./assets/Tech_Logo/php_logo.webp";
import wordPressLogo from "./assets/Tech_Logo/WordPress-logo.png";
// Experience Section Logo's

import sc_webtech from "./assets/Work_Logo/sc_webtech.png";
import weavesWeb from "./assets/Work_Logo/weaves-web-logo.jpg";

// Education Section Logo's
import hzs_logo from "./assets/Education_Logo/hzs_logo.jpg";

import Techno_india_logo from "./assets/Education_Logo/Techno_india_logo.jpg";
// Project Section Logo's

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "PHP", logo: phpLogo },

      { name: "WORDPRESS", logo: wordPressLogo },

      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Render", logo: renderLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: sc_webtech,
    role: "WORDPRESS Developer",
    company: "SC",
    date: "January 2024 - August 2024",
    desc: "Developed dynamic and scalable web applications using the WORDPRESS, handling  backend development.",
    skills: ["PHP", "WORDPRESS", "MySQL"],
  },
  {
    id: 1,
    img: weavesWeb,
    role: "Fullstack Intern",
    company: "Agumentik Group of Companies",
    date: "September 2024 - November 2025",
    desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript,  NoSQL , Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "NoSQL",
      "SQL",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: Techno_india_logo,
    school: "Techno India University",
    date: "Aug 2019 - September 2023",
    grade: "7.2 CGPA",
    desc: "I have completed my degree in from Techno India University, Kolkata. During my time at Techno India University, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at TIU University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "B.TECH",
  },

  {
    id: 2,
    img: hzs_logo,
    school: "Howrah Zilla School , Howrah",
    date: "Apr 2017 - March 2019",
    grade: "71%",
    desc: "I completed my class 12 education from Howrah Zilla School,  under the West Bengal board, where I studied Physics, Chemistry, and Mathematics (PCM) with Statistics.",
    degree: "WB(XII) - PCM with Statistics",
  },
  {
    id: 3,
    img: hzs_logo,
    school: "Howrah Zilla School , Howrah",
    date: "Jan 2016 - March 2017",
    grade: "86%",
    desc: "I completed my class 10 education from Howrah Zilla School, under the West Bengal board, where I studied Science with Computer.",
    degree: " ",
  },
];

export const projects = [
  {
    id: 0,
    title: "Task Manager using Redux Toolkit",
    description:
      "A modern and responsive Todo Application built with React, Redux Toolkit, and Tailwind CSS. Features include adding, editing, deleting, completing, and filtering todos with persistent LocalStorage support. All state management and todo operations are fully handled using Redux Toolkit.",
    tags: ["HTML", "CSS", "Redux", "React JS"],
    github: "https://github.com/Sounava2000/todo-redux-app",
    webapp: "https://todo-redux-app-mu.vercel.app/",
  },
  {
    id: 1,
    title: "MERN Image Upload Manager",
    description:
      "A MERN stack image upload application featuring single and multiple image uploads, Multer-based file handling, Cloudinary cloud storage, MongoDB integration, image previews, and responsive UI.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Express JS",
      "Cloudinary",
    ],
    github: "https://github.com/Sounava2000/Image-Upload-App",
    webapp: "https://image-upload-app-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "MERN Employee Dashboard",
    description:
      "A full-stack employee management dashboard built with the MERN stack featuring CRUD operations, backend pagination, and image upload functionality. The application allows users to create, read, update, and delete employee records efficiently while supporting profile image uploads using Multer and Cloudinary. Built with REST APIs, responsive UI design, and seamless frontend-backend integration.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "API",
      "Node JS",
      "Cloudinary",
      "Express JS",
    ],
    github: "https://github.com/Sounava2000/mern-employee-dashboard",
    webapp: "https://mern-employee-dashboard.vercel.app/",
  },
  {
    id: 3,
    title: "Doctor Appointment Booking System",
    description:
      "A MERN stack doctor appointment booking system with patient authentication, appointment scheduling, profile management, and responsive UI.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Cloudinary",
      "React JS",
      "API",
      "Node JS",
      "Express JS",
    ],
    github: "https://github.com/Sounava2000/doctor-mern",
    webapp: "https://doctor-frontend-dusky.vercel.app/",
  },
  {
    id: 4,
    title: "Doctor & Admin Dashboard",
    description:
      "A MERN stack admin and doctor dashboard featuring appointment management, doctor management, authentication, analytics dashboard, and profile update functionality.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Cloudinary",
      "React JS",
      "API",
      "Node JS",
      "Express JS",
    ],
    github: "https://github.com/Sounava2000/doctor-mern",
    webapp: "https://doctor-mern-admin.vercel.app/",
  },
];
