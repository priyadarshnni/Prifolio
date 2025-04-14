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
    docker,
    github2,
    photoshop,
    illustrator,
    filmora,
    aasf,
    carrent,
    jobit,
    tripguide,
    threejs,
    passman,
    storyteller,
    nirbhav,
    prifolio,
    insta,
    linkedin,
    github,
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
      title: "MERN Stack Developer",
      icon: backend,
    },
    {
      title: "React Developer",
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
      name: "React JS",
      icon: reactjs,
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
      name: "github",
      icon: github2,
    },
    
   
  ];
  
  const experiences = [
    {
      title: "Developer & Designer",
      subtitle:"Nirbhav Automation",
      company_name: "AASF",
      icon: aasf,
      iconBg: "#383E56",
      date: "September 2024 - Current",
      points: [


        "Engineered a robust and scalable automation platform leveraging React and modern web technologies.",
        "Designed an intuitive, responsive user interface to enhance workflow efficiency and user interaction.",
        "Achieved tangible improvements in operational speed, productivity, and overall user experience.",
        
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "ChatterBox",
      description:
        "Chatterbox is a real-time chat application built with the MERN (MongoDB, Express, React, Node.js) stack that utilizes Socket.IO for bidirectional communication and real-time messaging. This application provides a secure and user-friendly interface for seamless communication, supporting features like typing indicators, message read receipts, and group chats.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: passman,
      source_code_link: "https://github.com/priyadarshnni/ChatterBox",
    },
    {
      name: "TasteTaxi",
      description:
        "TasteTaxi is a full-stack food delivery web application which features secure user authentication using JWT (JSON Web Token) and provides a seamless and responsive user interface for managing food delivery orders. The application integrates real-time order tracking and optimizes overall performance for a smooth user experience.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: storyteller,
      source_code_link: "https://github.com/priyadarshnni/TasteTaxi",
    },

     {
      name: "Nirbhav Automation",
      description:
        "Crafted an innovative website for Nirbhav Automation using React.js to enable dynamic functionality and Vanilla CSS for an elegant, polished design. Focused on maintaining top-notch code quality to ensure smooth development and seamless collaboration within the team.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "vanilla CSS",
          color: "green-text-gradient",
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: nirbhav,
      source_code_link: "hhttps://github.com/priyadarshnni/NirbhavAutomation-website",
    },
    
     {
      name: "Priiifolio",
      description:
        "Priiifolio is my captivating portfolio website crafted with React, Three.js, and animations. Explore a world of creativity as stunning visuals come to life through seamless interactions, showcasing my work in an immersive and engaging manner.",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "material-ui",
          color: "pink-text-gradient",
        },
      ],
      image: prifolio,
      source_code_link: "hhttps://github.com/priyadarshnni/NirbhavAutomation-website",
    },
   
  ];

  const socials = [
    {
      name: "github",
      icon: github,
      link: "https://github.com/priyadarshnni",
    },
    {
      name: "instagram",
      icon: insta,
      link: "https://www.instagram.com/priyadarshnni?igsh=MWNoZm1ibWJ5MDdrMA==",
    },
    {
      name: "linkedin",
      icon: linkedin,
      link: "www.linkedin.com/in/priyadarshnni"
    },
  ];
  
  export { services, technologies, experiences, projects, socials };