import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side - Image */}
        <div className="flex justify-center">
          <div className="p-[3px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-[0_0_30px_rgba(236,72,153,0.6)]">
            <div className="bg-black rounded-2xl p-4">
              <img
                src="/myphoto.jpeg"
                alt="About"
                className="w-72 rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a passionate Full Stack Developer who loves building modern,
            responsive, and scalable web applications. I specialize in the
            MERN stack and enjoy solving real-world problems through clean and
            efficient code.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            My goal is to continuously grow as a developer, contribute to
            impactful projects, and create digital experiences that users love.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center">
              <h3 className="text-xl font-bold text-pink-400">10+</h3>
              <p className="text-gray-400 text-sm">Projects Completed</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-center">
              <h3 className="text-xl font-bold text-purple-400">1+</h3>
              <p className="text-gray-400 text-sm">Years Learning</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;