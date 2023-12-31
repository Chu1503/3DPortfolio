import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={isDesktop() ? fadeIn("down", "spring", 1, 0.75) : {}}
      className="w-full red-green-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[300px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

function isDesktop() {
  return window.matchMedia("(min-width: 768px)").matches;
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a third year engineering student with a genuine interest in machine
        learning, data science, UI/UX design and web development. Through my
        academic journey, I have cultivated teamwork and leadership skills by by
        interacting with peers and drawing inspiration from my teachers. I am
        driven by passion and maintain a diligent work ethic. I am humbled by
        shaping experiences that makes a highly motivated individual, always
        seeking improvement and eager to contribute to team success.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      {/* <motion.div
        variants={fadeIn("down", "spring", 1, 0.75)}
        className="w-full red-green-gradient p-[1px] rounded-[20px] shadow-card"
        style={{
          // Media query styles for desktop view
          "@media (max-width: 768px)": {
            display: "none" // Hide the line on mobile view
          }
        }}
      /> */}
    </>
  );
};

export default SectionWrapper(About, "about");
