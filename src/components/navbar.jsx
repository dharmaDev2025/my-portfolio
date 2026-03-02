import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Dharmendra
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium text-white">
          <li><a href="#home" className="hover:text-pink-400 transition">Home</a></li>
          <li><a href="#about" className="hover:text-pink-400 transition">About</a></li>
          <li><a href="#skills" className="hover:text-pink-400 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-pink-400 transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-pink-400 transition">Contact</a></li>
        </ul>

        {/* Desktop GitHub Button */}
        <a
          href="https://github.com/dharmaDev2025"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition"
        >
          GitHub Profile
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white cursor-pointer">
          {open ? (
            <X size={28} onClick={() => setOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 text-white flex flex-col items-center gap-6 py-6">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Portfolio</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          {/* Mobile GitHub Button */}
          <a
            href="https://github.com/dharmaDev2025"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
            onClick={() => setOpen(false)}
          >
            GitHub Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;