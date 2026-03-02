import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black to-gray-900 text-white"
    >

      {/* Profile Image */}
      <div className="mb-8">
        <img
          src="/myphoto.jpeg"
          alt="Profile"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-pink-500 shadow-xl"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Dharmendra Behera
        </span>
      </h1>

      {/* Role */}
      <h2 className="mt-4 text-lg md:text-2xl text-gray-300 font-medium">
        Full Stack Developer
      </h2>

      {/* Subtext */}
      <p className="mt-6 max-w-2xl text-gray-400 text-base md:text-lg">
        I build modern, scalable and responsive web applications using
        technologies like React, Node.js, MongoDB and Java.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="#contact"
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition font-semibold"
        >
          Contact Me
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-lg border border-white/30 hover:bg-white hover:text-black transition"
        >
          Download Resume
        </a>
      </div>

    </section>
  );
};

export default Hero;