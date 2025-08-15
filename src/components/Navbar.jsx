// src/components/Navbar.jsx
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Shivansh Garg</h1>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            aria-label="Toggle navigation menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className="flex flex-col space-y-3 pb-4">
            <li><a href="#about" onClick={closeMenu} className="block py-2 hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#projects" onClick={closeMenu} className="block py-2 hover:text-cyan-400 transition-colors">Projects</a></li>
            <li><a href="#skills" onClick={closeMenu} className="block py-2 hover:text-cyan-400 transition-colors">Skills</a></li>
            <li><a href="#contact" onClick={closeMenu} className="block py-2 hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
