import React, { forwardRef } from "react";
import "./About.css";
import { motion } from "framer-motion";
function About(props, ref) {
  const aboutPhotoAnimation = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };
  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        initial="hidden"
        // animate="visible"
        whileInView="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.3, delayChildren: 0.2 },
          },
        }}
        className="img-about scroll-scale"
      >
        <motion.div variants={aboutPhotoAnimation}>
          <img src="./assets/5.png" alt="" width="450px" height="450px" loading="lazy"/>
        </motion.div>
        <motion.div variants={aboutPhotoAnimation} className="info-about1 te">
          <span>10+</span>
          <p>Years OF Experience</p>
        </motion.div>
        <motion.div variants={aboutPhotoAnimation} className="info-about2 te">
          <span>150+</span>
          <p>Projects Complete</p>
        </motion.div>
        <motion.div variants={aboutPhotoAnimation} className="info-about3 te">
          <span>200+</span>
          <p>Happy cionts</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        // animate="visible"
        whileInView="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.3, delayChildren: 1.5 },
          },
        }}
        className="about-content scroll-scale"
      >
        <motion.div variants={aboutPhotoAnimation} className="">
          <span>Let Me Introduce Myself</span>
          <h2>About Me</h2>
        </motion.div>
        <motion.h3 variants={aboutPhotoAnimation}>A good story</motion.h3>
        <motion.p variants={aboutPhotoAnimation}>
          As a dedicated Frontend Developer, I specialize in creating
          professional web applications tailored for businesses and companies.
          With a strong foundation in leadership, I excel in fostering
          collaboration, effective communication, and infusing projects with
          passion. I am committed to leveraging my solid development skills to
          deliver high-quality solutions that meet and exceed client
          expectations.
        </motion.p>

        <motion.div variants={aboutPhotoAnimation} className="btn-box">
          <a href="#" className="btn">
            Read More!
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default forwardRef(About);
