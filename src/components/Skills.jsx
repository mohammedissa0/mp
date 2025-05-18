import React, { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

function SkillRight({ name, prog }) {
  return (
    <div className="skill-bar">
      <div className="info">
        <p className={name}>{name.toUpperCase()}</p>
        <p>{prog}</p>
      </div>
      <div className="bar">
        <span className={name}></span>
      </div>
    </div>
  );
}
function Circle({ big, small }) {
  return (
    <div className="box">
      <div className="circle" data-dots="80" data-percent={big}></div>
      <div className="text">
        <big>{big}%</big>
        <small>{small}</small>
      </div>
    </div>
  );
}
function Skills(props, ref) {
  useEffect(() => {
    const circles = document.querySelectorAll(".circle");

    circles.forEach((elem) => {
      const dots = elem.getAttribute("data-dots");
      const marked = elem.getAttribute("data-percent");
      const percent = Math.floor((dots * marked) / 100);
      const rotate = 360 / dots;
      let points = "";

      for (let i = 0; i < dots; ++i) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
      }

      elem.innerHTML = points;

      const pointsMarked = elem.querySelectorAll(".points");
      for (let i = 0; i < percent; ++i) {
        pointsMarked[i].classList.add("marked");
      }
    });
  }, []); // The empty dependency array ensures this runs only once on mount

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        initial={{ y: -25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="main-text scroll-scale"
      >
        <span>Technical and Professional</span>
        <h2>My Skills</h2>
      </motion.div>
      <div className="skill-main">
        <motion.div
          initial={{ x: -25, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="skill-left scroll-scale"
        >
          <h3>Technical Skills</h3>
          <SkillRight name="html" prog="97%" />
          <SkillRight name="css" prog="90%" />
          <SkillRight name="sass" prog="85%" />
          <SkillRight name="tailwind" prog="80%" />
          <SkillRight name="javascript" prog="90%" />
          <SkillRight name="reactjs" prog="85%" />
          <SkillRight name="framer-motionjs" prog="60%" />
          <SkillRight name="photoshop" prog="90%" />
          <SkillRight name="figma" prog="75%" />
          <SkillRight name="illustirator" prog="70%" />
        </motion.div>
        {/* <!-- skill right----------------------------------------------- --> */}
        <motion.div
         
          className="skill-right scroll-scale"
        >
          <h3>Professional Skills</h3>
          <div className="professional">
            <Circle big="100" small="Team Work" />
            <Circle big="95" small="Creativity" />
            <Circle big="85" small="Problem-Solving" />
            <Circle big="85" small="Communication" />
            <Circle big="90" small="Time-Management" />
            <Circle big="80" small="Leadership" />
            <Circle big="95" small="Adaptability" />
            <Circle big="90" small="Interpersonal" />
            <Circle big="80" small="Critical thinking" />
          </div>
        </motion.div>

        {/* <!-- skill bottom----------------------------------------------- --> */}
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="skill-bottom scroll-scale"
        >
          <h3>Languages</h3>
          <div className="skill-bar">
            <div className="info">
              <p>Arabic</p>
              <p>Native</p>
            </div>
            <div className="bar">
              <span className="arabic"></span>
            </div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <p>English</p>
              <p>75%</p>
            </div>
            <div className="bar">
              <span className="english"></span>
            </div>
          </div>

          <div className="skill-bar">
            <div className="info">
              <p>Chinese</p>
              <p>25%</p>
            </div>
            <div className="bar">
              <span className="chinese"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default forwardRef(Skills);
