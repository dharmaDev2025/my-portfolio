import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS / Tailwind", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React JS", level: "75%" },
    { name: "Node JS", level: "70%" },
    { name: "MongoDB", level: "65%" },

    { name: "Java", level: "80%" },
    { name: "Core Java", level: "80%" },
    { name: "Python", level: "80%" },
    { name: "Machine Learning", level: "70%" },
    { name: "SQL", level: "50%" },
  ];

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          My Skills
        </h2>

        {/* Skills List */}
        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div key={index}>

              {/* Skill Name */}
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-sm text-gray-400">{skill.level}</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 transition-all duration-700"
                  style={{ width: skill.level }}
                ></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;