import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, passman,nirbhav, prifolio, storyteller } from "../assets"; // Importing images
import { SectionWrapper } from "./hoc";

const projects = [
  {
    name: "ChatterBox",
    description:
      "Chatterbox is a real-time chat application built with the MERN (MongoDB, Express, React, Node.js) stack that utilizes Socket.IO for bidirectional communication and real-time messaging. This application provides a secure and user-friendly interface for seamless communication, supporting features like typing indicators, message read receipts, and group chats.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "socket.io", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: passman,
    source_code_link: "https://github.com/priyadarshnni/ChatterBox",
  },
  {
    name: "TasteTaxi",
    description:
      "TasteTaxi is a full-stack food delivery web application which features secure user authentication using JWT and provides a seamless user interface for managing food delivery orders.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "material-ui", color: "pink-text-gradient" },
    ],
    image: storyteller,
    source_code_link: "https://github.com/priyadarshnni/TasteTaxi",
  },
  {
    name: "Nirbhav Automation",
    description:
      "Crafted an innovative website for Nirbhav Automation using React.js to enable dynamic functionality and Vanilla CSS for an elegant, polished design.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "vanilla CSS", color: "green-text-gradient" },
      { name: "material-ui", color: "pink-text-gradient" },
    ],
    image: nirbhav,
    source_code_link:
      "https://github.com/priyadarshnni/NirbhavAutomation-website",
  },
  {
    name: "Priiifolio",
    description:
      "Priiifolio is my captivating portfolio website crafted with React, Three.js, and animations. Explore a world of creativity showcasing my work in an immersive manner.",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "ThreeJS", color: "green-text-gradient" },
      { name: "material-ui", color: "pink-text-gradient" },
    ],
    image: prifolio,
    source_code_link: "https://github.com/priyadarshnni/Prifolio/tree/main",
  },
];

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  onHover,
  onLeave,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[400px] sm:h-[450px] w-full h-full flex-shrink-0"
      onMouseEnter={onHover} // Pause scrolling when hovered
      onMouseLeave={onLeave} // Resume scrolling when no longer hovered
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <div className="relative w-full h-full">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>


        <div className="mt-5 text-center">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[12px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[12px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isPaused, setIsPaused] = useState(false); // State to control scrolling pause

  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>My Works</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          I have crafted a diverse range of projects that demonstrate my
          technical proficiency and innovation. Notably, I have developed MERN
          (MongoDB, Express.js, React, and Node.js) applications demonstrating
          my aptitude for creating intuitive and visually appealing user
          interfaces.
        </p>
      </div>

      {/* Horizontal Scrolling Section */}
      <div className="mt-20 overflow-hidden">
        <motion.div
          className="flex gap-5" // Add space between cards
          initial={{ x: 0 }}
          animate={isPaused ? { x: null } : { x: "-100%" }} // Pause/Resume scrolling
          transition={{
            duration: 9, // Control the speed of the scroll
            repeat: Infinity, // Repeat infinitely
            ease: "linear", // Smooth, consistent scrolling
          }}
        >
          {projects.concat(projects).map((project, index) => (
            // Duplicate projects array to enable seamless looping
            <ProjectCard
              key={`project-${index}`}
              {...project}
              onHover={() => setIsPaused(true)} // Pause scrolling
              onLeave={() => setIsPaused(false)} // Resume scrolling
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, " ");
