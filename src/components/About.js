import React, { useState, useEffect } from "react";

const Typewriter = ({ title }) => {
  const [activeTitle, setActiveTitle] = useState("");

  useEffect(() => {
    let intervalId;
    let index = 0;

    const typeNextCharacter = () => {
      setActiveTitle((prev) => prev + title[index]);
      index++;

      if (index === title.length+1) {
        setActiveTitle("");
        index = 0;
      }
    };

    intervalId = setInterval(typeNextCharacter, 150);

    return () => clearInterval(intervalId);
  }, [title]);

  return <span>{activeTitle}</span>;
};

export default function About() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            {windowWidth > 1024 ? (
              <Typewriter title="Hi, I'm Vijay Jangal." />
            ) : (
              <span>Hi, I'm Vijay Jangal.</span>
            )}
            {/* Hi, I'm Vijay Jangal. */}
            <br/> I love to build amazing
            apps and websites.
          </h1>
          <p className="mb-8 leading-relaxed">
            I'm an IIT Guwahati grad, grounded and geared up to apply my skills
            in the real world. Eager to connect with fellow professionals and
            make meaningful connections!
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              onClick={scrollToSection}
            >
              Let's work together
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              onClick={scrollToSection}
            >
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./bro.svg"
          />
        </div>
      </div>
    </section>
  );
}
const scrollToSection = (e) => {
  e.preventDefault();

  const targetId = e.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
