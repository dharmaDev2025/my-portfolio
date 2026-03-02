import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Food-Del",
      description:
        "A full-stack MERN food delivery application with authentication, cart system, admin dashboard, and payment integration.",
      deployed: true,
      live: "https://food-del-frontend-4tu7.onrender.com",
      github: "https://github.com/dharmaDev2025/Food-del",
    },
    {
      title: "StreamPlay",
      description:
        "A modern streaming platform with watchlist, continue watching, like/dislike system, and user dashboard.",
      deployed: false,
      github: "https://github.com/dharmaDev2025/STREAMPLAY",
    },
    {
      title: "Quick GPT",
      description:
        "AI-based chat assistant web app built using React and API integration for smart responses.",
      deployed: false,
      github: "https://github.com/dharmaDev2025/quickgpt",
    },
    {
      title: "Tic Tac Toe Game",
      description:
        "Interactive Tic Tac Toe game built with React featuring clean UI and responsive design.",
      deployed: true,
      live: "https://dharmadev2025.github.io/tic-tac-toe-game/",
      github: "https://github.com/dharmaDev2025/tic-tac-toe-game",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-lg"
            >
              
              {/* Project Title + Badge */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>

                {project.deployed && (
                  <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                    Live
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-6">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-4">

                {/* Show Live Button Only If Deployed */}
                {project.deployed && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-80 transition"
                  >
                    Live Demo
                  </a>
                )}

                {/* GitHub Button (Always Visible) */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-full border border-white hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;