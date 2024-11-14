import React, { useState, useEffect, useRef } from "react";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  let flyBtn = document.querySelector(".flyBtn");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 600) {
      flyBtn.style.display = "block";
    } else {
      flyBtn.style.display = "none";
    }
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = [homeRef, aboutRef, skillsRef, portfolioRef, contactRef];
    sections.forEach((section) => {
      if (section.current) {
        observer.observe(section.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.current) {
          observer.unobserve(section.current);
        }
      });
    };
  }, []);
  return (
    <>
      <Header activeSection={activeSection} />
      <Home ref={homeRef} />
      <div className="flyBtn">
        <a href={(window.location.href = "#home")}>
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Portfolio ref={portfolioRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
