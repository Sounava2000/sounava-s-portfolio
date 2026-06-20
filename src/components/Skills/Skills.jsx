// src/components/Skills/Skills.jsx

import React from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-skills-gradient clip-path-custom"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            SKILLS
          </h2>

          <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" />

          <p className="mt-5 text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            A collection of my technical skills and expertise honed through
            various projects and experiences.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SkillsInfo.map((category) => (
            <Tilt
              key={category.title}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope
            >
              <div
                className="
                  bg-[#09101f]
                  border
                  border-[#8245ec50]
                  rounded-2xl
                  p-6
                  h-full
                  shadow-[0_0_20px_rgba(130,69,236,0.25)]
                "
              >
                {/* Category Title */}
                <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-300 mb-8">
                  {category.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="
                        flex
                        items-center
                        gap-2
                        border
                        border-gray-700
                        rounded-full
                        px-4
                        py-2
                        hover:border-[#8245ec]
                        transition-all
                        duration-300
                      "
                    >
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-5 h-5 object-contain"
                      />

                      <span className="text-xs sm:text-sm text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;