import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects({ isDarkMode }) {
  return (
    <section
      id="projects"
      className="mt-16"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Projects I worked on
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            These are some of my projects on which i have worked on during my
            college days at IIT Guwahati.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div
                  className={`${
                    isDarkMode
                      ? "px-8 py-10 relative w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 hover:z-0"
                      : "px-8 py-10 relative w-full border-4 border-white-800 text-black-400 bg-white opacity-0 hover:opacity-100 hover:z-0"
                  }`}
                >
                  <h2 className="tracking-widest text-sm title-font font-medium mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
