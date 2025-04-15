import React from "react";
import { SectionWrapper } from "./hoc";
import { technologies } from "../constants";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Here are some of the technologies that I know
        </p>

        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            className="w-28 h-28 flex items-center justify-center"
            whileHover={{ scale: 1.1 }} // Animation on hover
            whileTap={{ scale: 0.9 }} // Animation on tap
            initial={{ opacity: 0, y: 50 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Final animation state
            transition={{ duration: 0.5 }} // Animation duration
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
