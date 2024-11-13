// TypingText.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./TypingText.css";
const roles = [
  "Frontend Developer",
  "Graphic Designer",
  "Linguistic",
  "Web Designer",
  "Calithtencs athlete",
];

const TypingText = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const delay = isDeleting && currentText === "" ? 1000 : typeSpeed;

    const typingEffect = setTimeout(() => {
      if (!isDeleting && charIndex < roles[index].length) {
        setCurrentText((prev) => prev + roles[index][charIndex]);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === roles[index].length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, 500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setCharIndex(0);
      }
    }, delay);

    return () => clearTimeout(typingEffect);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="typingText">
      &nbsp;
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: "inline-block" }}
      >
        {currentText}
      </motion.span>
      <span style={{ fontWeight: "normal", marginLeft: "2px" }}>|</span>
    </div>
  );
};

export default TypingText;
