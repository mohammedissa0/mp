import React, { useState, useEffect } from "react";
import "./Header.css";
import "../index.css";
import { motion } from "framer-motion";
function Header(props) {
  const { activeSection } = props;
  const [active, setActive] = useState(false);

  function onclick() {
    setActive((prev) => !prev);
  }

  const listAnimation = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <header>
      <div className="logo">
        <a href="#" className="logo">
          <span>Moh</span>ammed.
        </a>
      </div>
      <div className={`${active ? "overlay" : ""}`} onClick={onclick}></div>
      <motion.ul
        className={`navlist ${active ? "open" : ""}`}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
          },
        }}
      >
        <motion.li variants={listAnimation}>
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Home
          </a>
        </motion.li>
        <motion.li variants={listAnimation}>
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
        </motion.li>
        <motion.li variants={listAnimation}>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            Skills
          </a>
        </motion.li>
        <motion.li variants={listAnimation}>
          <a
            href="#portfolio"
            className={activeSection === "portfolio" ? "active" : ""}
          >
            Portfolio
          </a>
        </motion.li>
        <motion.li variants={listAnimation}>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </motion.li>
      </motion.ul>
      <div
        id="menu-icon"
        className={`bx bx-menu ${active ? "bx-x" : ""}`}
        onClick={onclick}
      ></div>
    </header>
  );
  // <div class="flyBtn">
  //   <a href="#home"><i class="bx bx-up-arrow-alt"></i></a>
  // </div>
}

export default Header;
