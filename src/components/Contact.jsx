import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";
import { socials } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(formRef.current);
    formData.append("access_key", "ca486e79-3e54-4bd8-a308-56cd918f6a08");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setLoading(false);
        setResult("Form Submitted Successfully");
        alert("Thank you! I will get back to you as soon as possible!");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      setResult("Something went wrong. Please try again.");
      alert("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="xl:mt-8 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-2 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your Name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your Email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="3"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
          <span className="text-white mt-4">{result}</span>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
        
        </motion.div>
      </div>

      <motion.div variants={slideIn("right", "tween", 0.7, 1)}>
        <div className="flex flex-row flex-wrap justify-end gap-10 mt-10">
          <p className="text-[23px] text-secondary tracking-wider text-white font-bold">
            Find me on :{" "}
          </p>
          {socials.map((social) => (
            <div className="w-9 h-9 relative" key={social.name}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={social.icon}
                  className="hover:scale-125"
                  alt={social.name}
                />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
