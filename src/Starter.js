import React from 'react'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useState, useEffect } from "react";
import Experience from "./components/Experience";
import "animate.css";

const Starter = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setIsDarkMode(storedTheme === "dark");
      } else {
        setIsDarkMode(
          window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
      }
    }, []);

    const toggleTheme = () => {
      const newTheme = isDarkMode ? "light" : "dark";
      setIsDarkMode(!isDarkMode);
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", isDarkMode);
    };

    // const [isAnimated, setIsAnimated] = useState(true);

    // useEffect(() => {
    //   const timeoutId = setTimeout(() => {
    //     // setIsAnimated(false);
    //     window.requestAnimationFrame(() => {
    //       window.scrollTo({
    //         top: 0,
    //         behavior: "smooth",
    //       });
    //     });
    //   }, 1000);

    //   return () => clearTimeout(timeoutId);
    // }, []);

  return (
    <main
      className={`${
        isDarkMode
          ? "text-white bg-gray-900 body-font font-sans"
          : "text-black bg-white body-font font-sans"
      } animate__animated animate__fadeInLeft`}
    >
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <About />
      <Experience isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />

      <Contact isDarkMode={isDarkMode} />
    </main>
  );
}

export default Starter