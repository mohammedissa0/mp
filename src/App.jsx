import React, { useState, useEffect, useRef } from "react";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
function App() {
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    let flyBtn = document.querySelector(".flyBtn");
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 600) {
        flyBtn.style.display = "block";
      } else {
        flyBtn.style.display = "none";
      }
    });
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
       <Suspense fallback={<div>Loading About...</div>}>
        <About ref={aboutRef} />
      </Suspense>

      <Suspense fallback={<div>Loading Skills...</div>}>
        <Skills ref={skillsRef} />
      </Suspense>

      <Suspense fallback={<div>Loading Portfolio...</div>}>
        <Portfolio ref={portfolioRef} />
      </Suspense>

      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact ref={contactRef} />
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
