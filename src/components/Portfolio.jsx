import React, { forwardRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

import mixitup from "mixitup";
function I({ name }) {
  return (
    <motion.i
      initial={{ rotate: 0 }}
      whileHover={{
        rotate: [20, 0, -20, 0],
        scale: [1, 1.1, 1],
        transition: { duration: 0.4, repeat: Infinity },
      }}
      className={name}
    ></motion.i>
  );
}

function Porject({ kind, img, name, link, github }) {
  return (
    <div className={`port-box mix ${kind}`}>
      <div className="port-image">
        <img src={img} alt="" />
      </div>
      <div className="port-content">
        <h3>{name}</h3>

        <div className="a-grope">
          <a href={link} target="_blank">
            {/* <i className="bx bx-link-external"></i> */}
            <I name="bx bx-link-external" />
          </a>
          <a href={github} target="_blank">
            <I name="bx bxl-github" />
          </a>
        </div>
      </div>
    </div>
  );
}
function Portfolio(props, ref) {
  useEffect(() => {
    var mixer = mixitup(".portfolio-gallery");
  }, []);

  const allRef = useRef(null);
  const landingRef = useRef(null);
  const projRef = useRef(null);
  const gameRef = useRef(null);
  const interRef = useRef(null);
  const [activeButton, setActiveButton] = useState(allRef);

  function handleClick(ref) {
    setActiveButton(ref);
  }
  useEffect(() => {
    console.log(activeButton.target);
  }, [activeButton]);

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="main-text scroll-scale"
      >
        <span>What I Will Do For You</span>
        <h2>Latest Projects</h2>
      </motion.div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fillter-buttons scroll-scale"
        >
          <button
            className={`button ${activeButton == allRef ? "" : ""}`}
            data-filter="all"
            ref={allRef}
            onClick={handleClick}
          >
            All
          </button>
          <button
            className={`button ${activeButton == landingRef ? "" : ""}`}
            data-filter=".landing-pages"
            ref={landingRef}
            onClick={handleClick}
          >
            Landing-Pages
          </button>
          <button
            className={`button ${activeButton == projRef ? "" : ""}`}
            data-filter=".ReactProjects"
            ref={projRef}
            onClick={handleClick}
          >
            React Projects
          </button>
          <button
            className={`button ${activeButton == gameRef ? "" : ""}`}
            data-filter=".games"
            ref={gameRef}
            onClick={handleClick}
          >
            Games
          </button>
          <button
            className={`button ${activeButton == interRef ? "" : ""}`}
            data-filter=".inter"
            ref={interRef}
            onClick={handleClick}
          >
            Interacting
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="portfolio-gallery scroll-scale"
        >
          <Porject
            kind="ReactProjects landing-pages"
            img="./assets/watch.png"
            name="LuxuryWatch"
            link="https://roaring-fox-1c29d8.netlify.app/"
            github="https://roaring-fox-1c29d8.netlify.app/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects"
            img="./assets/appointment.png"
            name="appointment"
            link="https://appointment-taskelkook.netlify.app/"
            github="https://appointment-taskelkook.netlify.app/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects landing-pages"
            img="./assets/urinexa.png"
            name="Urinexa"
            link="https://urinexa.netlify.app/"
            github="https://urinexa.netlify.app/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects landing-pages"
            img="./assets/sportflex.png"
            name="SportFlex"
            link="https://sportflex.netlify.app/"
            github="https://sportflex.netlify.app/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects landing-pages"
            img="./assets/blue.png"
            name="BlueBits"
            link="https://bluebits0.netlify.app/"
            github="https://bluebits0.netlify.app/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects"
            img="./assets/gymWorkout.jpg"
            name="Gym Workout"
            link="https://gym-workout-reactjs.netlify.app/"
            github="https://github.com/Mohammed-issa0/Gym-Workout-with-reactjs/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects"
            img="./assets/prayer.png"
            name="Prayer Times"
            link="https://prayer-times0.netlify.app/"
            github="https://github.com/Mohammed-issa0/Prayer-times/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects"
            img="./assets/nasa.png"
            name="Nasa react app"
            link="https://nasa-react-app0.netlify.app/"
            github="https://github.com/Mohammed-issa0/nasa-react-app0/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects"
            img="./assets/vanlife.jpg"
            name="Vanlife website with ReactJs"
            link="https://vanlife0.netlify.app"
            github="https://github.com/Mohammed-issa0/Vanlife-website/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects"
            img="./assets/Tenezis.jpg"
            name="Tenezis Game with React"
            link="https://mohammed-issa0.github.io/Tenezis-Game/"
            github="https://github.com/Mohammed-issa0/Tenezis-Game/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects"
            img="./assets/searchMovies.png"
            name="search-for-movies"
            link="https://search-for-movies0.netlify.app"
            github="https://github.com/Mohammed-issa0/search-for-movies/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects"
            img="./assets/todo.png"
            name="TodoList with Reactjs"
            link="https://todolist-reactjs0.netlify.app/"
            github="https://github.com/Mohammed-issa0/reactjs-todolist/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects"
            img="./assets/twitter.png"
            name="Twitter with Reactjs+Tailwind"
            link="https://twitter0reactjs.netlify.app"
            github="https://github.com/Mohammed-issa0/Twitter-with-Tailwind-React/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects"
            img="./assets/Plants-Store.jpg"
            name="Plants Store with React"
            link="https://plants-store0.netlify.app"
            github="https://github.com/Mohammed-issa0/Plants-Store/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects"
            img="./assets/meme.png"
            name="Memes Generator"
            link="https://meme-generator0.netlify.app/"
            github="https://github.com/Mohammed-issa0/Meme-Generator0/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="ReactProjects"
            img="./assets/whyReact.jpg"
            name="Why React"
            link="https://mohammed-issa0.github.io/Why-React/"
            github="https://github.com/Mohammed-issa0/Why-React/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="landing-pages"
            img="./assets/hospital.png"
            name="Hospital WebSite"
            link="https://mohammed-issa0.github.io/Hospital-WebSite/"
            github="https://github.com/Mohammed-issa0/Hospital-WebSite/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="inter"
            img="./assets/crud.png"
            name="crud"
            link="https://mohammed-issa0.github.io/CRUD/"
            github="https://github.com/Mohammed-issa0/CRUD"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="games"
            img="./assets/Memory game.png"
            name="Memory Game"
            link="https://mohammed-issa0.github.io/Memory-game/"
            github="https://github.com/Mohammed-issa0/Memory-game/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="games"
            img="./assets/typing speed test game.png"
            name="Typing Speed Test Game"
            link="https://mohammed-issa0.github.io/Typing-Speed-Test-Game/"
            github="https://github.com/Mohammed-issa0/Typing-Speed-Test-Game/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="landing-pages"
            img="./assets/moving2.jpg"
            name="Moving Page"
            link="https://mohammed-issa0.github.io/moving-page/"
            github="https://github.com/Mohammed-issa0/moving-page/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="landing-pages"
            img="./assets/sign up page.png"
            name="Web Store"
            link="https://mohammed-issa0.github.io/Web-Store/"
            github="https://github.com/Mohammed-issa0/Web-Store/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="landing-pages"
            img="./assets/kasper.png"
            name="Kasper Design"
            link="https://mohammed-issa0.github.io/kasper/"
            github="https://github.com/Mohammed-issa0/kasper/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="landing-pages"
            img="./assets/Kitchen.jpg"
            name="Kitchen WebSite"
            link="https://mohammed-issa0.github.io/HomeKitchen-WebSite/"
            github="https://github.com/Mohammed-issa0/HomeKitchen-WebSite/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="inter"
            img="./assets/calc2.png"
            name="Jawdroping Calculator"
            link="https://mohammed-issa0.github.io/calculator/"
            github="https://github.com/Mohammed-issa0/calulator"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="inter"
            img="./assets/ai-image.png"
            name="AI Images Generator"
            link="https://mohammed-issa0.github.io/AI-Image-Generator/"
            github="https://github.com/Mohammed-issa0/AI-Image-Generator"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="inter"
            img="./assets/login.jpg"
            name="LogIn Page"
            link="https://mohammed-issa0.github.io/task-2/"
            github="https://github.com/Mohammed-issa0/task-2"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="inter"
            img="./assets/to-do list.jpg"
            name="todo list"
            link="https://mohammed-issa0.github.io/To-Do-List/"
            github="https://github.com/Mohammed-issa0/To-Do-List/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="games"
            img="./assets/x-o game.png"
            name="X-O Game"
            link="https://mohammed-issa0.github.io/X-O/"
            github="https://github.com/Mohammed-issa0/X-O/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="games"
            img="./assets/hangman-game.png"
            name="Hangman-Game"
            link="https://mohammed-issa0.github.io/Hangman-Game/"
            github="https://github.com/Mohammed-issa0/Hangman-Game/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="games"
            img="./assets/age counter.png"
            name="Age calculator"
            link="https://mohammed-issa0.github.io/Age-calculator/"
            github="https://github.com/Mohammed-issa0/Age-calculator/"
          />
          {/* //////////////////////////////////////////////// */}
          <Porject
            kind="landing-pages"
            img="./assets/b&w.jpg"
            name="Black and White site"
            link="https://mohammed-issa0.github.io/HTML-CSS-Design/"
            github="https://github.com/Mohammed-issa0/HTML-CSS-Design/"
          />
          {/* //////////////////////////////////////////////// */}
        </motion.div>
      </div>
    </section>
  );
}

export default forwardRef(Portfolio);
