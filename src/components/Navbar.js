import {
  SunIcon,
  MoonIcon,
} from "@heroicons/react/solid";
import { HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"; 
import React from "react";

export default function Navbar({ toggleTheme, isDarkMode }) {
  const scrollToSection = (e) => {
    e.preventDefault();

    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        
        let offsetTop;
        if(targetId === "experience")
        {
            offsetTop = targetElement.offsetTop;
        }
        else if(targetId === "about")
        {
            offsetTop = targetElement.offsetTop-70;
        }
        else
        {
            offsetTop = targetElement.offsetTop - 40; 
        }
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };




  return (
    <header
      className={`${
        isDarkMode
          ? "bg-gray-700 md:sticky top-0 z-11"
          : "bg-gray-100 md:sticky top-0 z-11"
      }`}
    >
      <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:z-11">
        <a className="title-font font-medium mb-4 md:mb-0">
          <a
            href="#about"
            className="ml-3 text-xl hover:text-gray-400"
            onClick={scrollToSection}
          >
            Vijay Jangal
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 z-11 flex flex-wrap items-center text-base justify-center">
          <a
            href="#experience"
            className="mr-5 hover:text-gray-400"
            onClick={scrollToSection}
          >
            Experience
          </a>

          <a
            href="#projects"
            className="mr-5 hover:text-gray-400"
            onClick={scrollToSection}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="mr-5 hover:text-gray-400"
            onClick={scrollToSection}
          >
            Skills
          </a>
        </nav>
        <div className="flex items-center mr-4">
          <a
            href="https://github.com/Vsjangal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 mr-8"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/vijay-jangal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 mr-8"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a
            href="https://wa.me/7357165048"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 mr-8"
          >
            <FaWhatsapp className="h-6 w-6" />
          </a>
          <button onClick={toggleTheme} className="hover:text-gray-400">
            {isDarkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <a
          href={require('../Vijay_jangal_resume.pdf')}
          download="Vijay_jangal_resume"
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="inline-flex items-center bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0 text-white hover:cursor-pointer"
            // onClick={handleDownloadResume}
          >
            Resume
            <HiDownload className="w-4 h-4 ml-1" />
          </button>
        </a>
      </nav>
    </header>
  );
}
