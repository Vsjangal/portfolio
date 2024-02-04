import React from "react";
import { FaBriefcase } from "react-icons/fa";

function Experience({ isDarkMode }) {
  const experiences = [
    {
      title: "Intern",
      company: "Big-Bites",
      date: "15 May 2022 - 15 July 2022",
      details: [
        "Worked on identifying optimal set of locations for opening 30 new cloud kitchens.",
        "Used genetic algorithm along with greedy algorithms to determine optimal locations based on order history.",
        "Solution laid the basis for the company's in-house food delivery app.",
      ],
    },
    {
      title: "React-native intern",
      company: "Stealth Startup",
      date: "15 Nov 2023 - 15 Jan 2024",
      details: [
        "Enhanced and implemented multiple UI functionalities of gaming application.",
        "Conducted comprehensive Usability Testing of the UI using TestFlight, leading to the identification and resolution of numerous application bugs.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`${isDarkMode ? "bg-gray-900" : "bg-white"} body-font mt-24`}
    >
      <div className="container px-5 py-24 mx-auto ">
        <div className="text-center mb-20">
          <FaBriefcase className="inline-block mb-4 h-8 w-8" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Work Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Here's a glimpse of my professional journey.
          </p>
        </div>
        <div className="flex flex-wrap sm:mx-4 md:mx-8 lg:mx-28 -mb-24">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`${
                isDarkMode ? "bg-gray-800" : "bg-gray-100 text-black"
              } lg:w-12/12 w-full p-4 mb-16 rounded-2xl`}
            >
              <div
                className={`p-6 rounded-lg flex flex-end items-center md: justify-center md:space-x-5 lg:justify-between mb-4`}
              >
                <div className="mr-4">
                  <FaBriefcase className="w-8 h-8" />
                </div>
                <div className="">
                  <h2 className="text-lg title-font font-medium mb-2">
                    {experience.title}
                  </h2>
                  <p className="leading-relaxed">
                    {experience.company} | {experience.date}
                  </p>
                </div>
              </div>
              <div className="-pt-16">
                {experience.details.map((detail, index) => (
                  <ul key={index} className="leading-relaxed list-disc ml-2">
                    <li>{detail}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
