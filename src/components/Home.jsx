import React, { forwardRef } from "react";
import "./Home.css";
import "../index.css";
import TypingText from "../effects/TypingText";
import { motion } from "framer-motion";

function I({ name }) {
  return (
    <motion.i
      initial={{ rotate: 0 }}
      whileHover={{
        rotate: [20, 0, -20, 0],
        scale: [1, 1.1, 1],
        transition: { duration: 0.4, repeat: Infinity },
      }}
      id="soIc"
      className={name}
    ></motion.i>
  );
}

function Home(props, ref) {
  const listAnimation = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <section id="home" className="home" ref={ref}>
      <motion.div
        initial="hidden"
        // animate="visible"
        whileInView="visible"
        viewport={{ threshold: 0.7 }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.3, delayChildren: 0.5 },
          },
        }}
        className="home-content scroll-scale"
      >
        <motion.h1 variants={listAnimation}>Hi! I'm Mohammed Issa</motion.h1>
        <motion.div variants={listAnimation} className="change-text">
          <h3>And I'm</h3>
          <h3>
            <TypingText />
          </h3>
        </motion.div>
        <motion.p variants={listAnimation}>
          Specialize in designing and developing modern websites, web
          applications, web services, and online stores. My passion lies in
          achieving excellence as a professional web developer, dedicated to
          delivering innovative solutions that meet the needs of businesses and
          users alike.
        </motion.p>
        <motion.div variants={listAnimation} className="info-box">
          <div className="email-info">
            <h5 className="pn">Phone Number :</h5>
            <a href="tel:00963932952575" target="_blank">
              <span>
                <span>+963 0932-952-575</span>
              </span>
            </a>
          </div>
          <div className="email-info">
            <h5 className="em">Email :</h5>
            <a href="mailto:mohammed.issaopte@gmail.com" target="_blank">
              <span>
                <span>mohammed.issaopte@gmail.com</span>
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div variants={listAnimation} className="btn-box">
          <a download href="./assets/Mohammed-issa0.pdf" className="btn">
            Donwload CV
          </a>
          <a href="#" className="btn">
            Hire Me Now!
          </a>
        </motion.div>
        <motion.div variants={listAnimation} className="social-icons">
          <a href="https://t.me/Mohammed_Issa0">
            <I name="bx bxl-linkedin" />
          </a>
          <a href="https://wa.me/qr/QOWRDZWALESRM1">
            <I name="bx bxl-whatsapp" />
          </a>
          <a href="https://t.me/Mohammed_Issa0">
            <I name="bx bxl-telegram" />
          </a>
          <a href="https://github.com/Mohammed-issa0">
            <I name="bx bxl-github" />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, y: 0 }}
        // transition: {{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        viewport={{ threshold: 0.7 }}
        className="home-image scroll-scale"
      >
        {/* <!-- <div className="chat"></div> --> */}
        <div className="img-box">
          <img src="./assets/2.png" alt="Mohammed issa" loading="lazy"/>
        </div>

        <div className="liquid-shaped">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100%"
            id="blobSvg"
          >
            <path fill="#12f7ff">
              <animate
                attributeName="d"
                dur="20000ms"
                repeatCount="indefinite"
                values="
                                M409.5,295.5Q392,341,372.5,408Q353,475,286.5,467.5Q220,460,160,441.5Q100,423,56.5,371.5Q13,320,28.5,254.5Q44,189,79,141Q114,93,165,53Q216,13,272.5,44.5Q329,76,355,121Q381,166,404,208Q427,250,409.5,295.5Z;

                                M440,307Q428,364,383.5,404.5Q339,445,279.5,452Q220,459,175.5,423Q131,387,89,348.5Q47,310,41.5,248.5Q36,187,90.5,158Q145,129,186,110.5Q227,92,287.5,64Q348,36,385,87.5Q422,139,437,194.5Q452,250,440,307Z;

                                M396,291Q378,332,358,387.5Q338,443,283,424.5Q228,406,178.5,398Q129,390,76.5,353Q24,316,44.5,256Q65,196,103,160Q141,124,178.5,69Q216,14,271,49Q326,84,365,117.5Q404,151,409,200.5Q414,250,396,291Z;

                                M406.5053,293.50126Q386.00404,337.00252,361.50177,388.5005Q336.9995,439.99849,281.49924,429.50252Q225.99899,419.00656,167.49445,416.00909Q108.9899,413.01161,106.51515,353Q104.04039,292.98839,67.51161,239.49167Q30.98283,185.99495,62.47955,127.48359Q93.97627,68.97223,158.4899,64.49773Q223.00353,60.02323,283.50631,51.50126Q344.00909,42.9793,378.00656,94.48839Q412.00404,145.99748,419.5053,197.99874Q427.00656,250,406.5053,293.50126Z;

                                M440.5,301.5Q410,353,380.5,412Q351,471,286,461.5Q221,452,185.5,408.5Q150,365,92.5,339Q35,313,62,258Q89,203,91,136Q93,69,160.5,83Q228,97,279,86Q330,75,369,112Q408,149,439.5,199.5Q471,250,440.5,301.5Z;

                                M434.5,292.5Q383,335,365,399Q347,463,282,472.5Q217,482,164.5,445.5Q112,409,90.5,356Q69,303,70.5,250.5Q72,198,91.5,144Q111,90,163,48.5Q215,7,276,32.5Q337,58,392.5,90.5Q448,123,467,186.5Q486,250,434.5,292.5Z;

                                M414.5,307Q428,364,388,414.5Q348,465,287.5,439Q227,413,185.5,393Q144,373,110,337Q76,301,83,252Q90,203,90,134.5Q90,66,158,75.5Q226,85,284.5,66Q343,47,365,104.5Q387,162,394,206Q401,250,414.5,307Z;

                                M443.5,299Q403,348,361.5,375.5Q320,403,269.5,433.5Q219,464,179,421Q139,378,110,339Q81,300,82.5,250.5Q84,201,108,157.5Q132,114,177,85.5Q222,57,273,72.5Q324,88,371.5,115Q419,142,451.5,196Q484,250,443.5,299Z;
                                
                                M409.5,295.5Q392,341,372.5,408Q353,475,286.5,467.5Q220,460,160,441.5Q100,423,56.5,371.5Q13,320,28.5,254.5Q44,189,79,141Q114,93,165,53Q216,13,272.5,44.5Q329,76,355,121Q381,166,404,208Q427,250,409.5,295.5Z;
                                "
              ></animate>
            </path>
          </svg>
        </div>

        <div className="liquid-shaped liquid-shaped2">
          <svg
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="100%"
            id="blobSvg"
          >
            <path fill="#12f7ff">
              <animate
                attributeName="d"
                dur="20000ms"
                repeatCount="indefinite"
                values="
                                M409.5,295.5Q392,341,372.5,408Q353,475,286.5,467.5Q220,460,160,441.5Q100,423,56.5,371.5Q13,320,28.5,254.5Q44,189,79,141Q114,93,165,53Q216,13,272.5,44.5Q329,76,355,121Q381,166,404,208Q427,250,409.5,295.5Z;

                                M440,307Q428,364,383.5,404.5Q339,445,279.5,452Q220,459,175.5,423Q131,387,89,348.5Q47,310,41.5,248.5Q36,187,90.5,158Q145,129,186,110.5Q227,92,287.5,64Q348,36,385,87.5Q422,139,437,194.5Q452,250,440,307Z;

                                M396,291Q378,332,358,387.5Q338,443,283,424.5Q228,406,178.5,398Q129,390,76.5,353Q24,316,44.5,256Q65,196,103,160Q141,124,178.5,69Q216,14,271,49Q326,84,365,117.5Q404,151,409,200.5Q414,250,396,291Z;

                                M406.5053,293.50126Q386.00404,337.00252,361.50177,388.5005Q336.9995,439.99849,281.49924,429.50252Q225.99899,419.00656,167.49445,416.00909Q108.9899,413.01161,106.51515,353Q104.04039,292.98839,67.51161,239.49167Q30.98283,185.99495,62.47955,127.48359Q93.97627,68.97223,158.4899,64.49773Q223.00353,60.02323,283.50631,51.50126Q344.00909,42.9793,378.00656,94.48839Q412.00404,145.99748,419.5053,197.99874Q427.00656,250,406.5053,293.50126Z;

                                M440.5,301.5Q410,353,380.5,412Q351,471,286,461.5Q221,452,185.5,408.5Q150,365,92.5,339Q35,313,62,258Q89,203,91,136Q93,69,160.5,83Q228,97,279,86Q330,75,369,112Q408,149,439.5,199.5Q471,250,440.5,301.5Z;

                                M434.5,292.5Q383,335,365,399Q347,463,282,472.5Q217,482,164.5,445.5Q112,409,90.5,356Q69,303,70.5,250.5Q72,198,91.5,144Q111,90,163,48.5Q215,7,276,32.5Q337,58,392.5,90.5Q448,123,467,186.5Q486,250,434.5,292.5Z;

                                M414.5,307Q428,364,388,414.5Q348,465,287.5,439Q227,413,185.5,393Q144,373,110,337Q76,301,83,252Q90,203,90,134.5Q90,66,158,75.5Q226,85,284.5,66Q343,47,365,104.5Q387,162,394,206Q401,250,414.5,307Z;

                                M443.5,299Q403,348,361.5,375.5Q320,403,269.5,433.5Q219,464,179,421Q139,378,110,339Q81,300,82.5,250.5Q84,201,108,157.5Q132,114,177,85.5Q222,57,273,72.5Q324,88,371.5,115Q419,142,451.5,196Q484,250,443.5,299Z;
                                
                                M409.5,295.5Q392,341,372.5,408Q353,475,286.5,467.5Q220,460,160,441.5Q100,423,56.5,371.5Q13,320,28.5,254.5Q44,189,79,141Q114,93,165,53Q216,13,272.5,44.5Q329,76,355,121Q381,166,404,208Q427,250,409.5,295.5Z;
                                "
              ></animate>
            </path>
          </svg>
        </div>

        {/* <motion.div
          className="reactAnim"
          initial={{ x: 130, y: -100 }}
          animate={{
            // rotate: [0, 100, 0],
            y: [0, 20, 0],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          <img src="./assets/react.png" />
        </motion.div>
        <motion.div
          className="reactAnim"
          initial={{ x: 130, y: -100 }}
          animate={{
            // rotate: [0, 100, 0],
            y: [0, 20, 0],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          <img src="./assets/react.png" />
        </motion.div>
        <motion.div
          className="reactAnim"
          initial={{ x: 400, y: -100 }}
          animate={{
            // rotate: [0, 100, 0],
            y: [0, 20, 0],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          <img src="./assets/tailwind.svg" style={{ color: "blue" }} />
        </motion.div> */}
      </motion.div>
    </section>
  );
}

export default forwardRef(Home);
