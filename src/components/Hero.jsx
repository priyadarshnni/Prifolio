import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typed from "react-typed";

const Hero = () => (
  <section className="relative w-full h-screen mx-auto herobg">
    <div
      className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
    >
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#aaa6c3]" />
        <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#aaa6c3] to-[#7c7c7c]" />{" "}
      </div>

      <div>
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I am&nbsp;
          <span className=" text-[#aaa6c3] text-10">
            <Typed
              strings={[
                "Priyadarshni ",
                "a Developer",
                "a Designer",
                "a Readerrr",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </span>
        </h1>

        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <br />I am a Developer, Designer, Reader and just a girl.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
