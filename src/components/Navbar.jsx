// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`modern-navbar fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shivansh Garg
            </h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-2">
              <li>
                <a href="#about" className="nav-link relative z-10 text-white hover:text-purple-400">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="nav-link relative z-10 text-white hover:text-purple-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="nav-link relative z-10 text-white hover:text-purple-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link relative z-10 text-white hover:text-purple-400">
                  Contact
                </a>
              </li>
            </ul>
            
            {/* Theme Toggle */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center group"
              aria-label="Toggle navigation menu"
            >
              <span className={`block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : 'group-hover:w-7'}`}></span>
              <span className={`block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : 'group-hover:w-5'}`}></span>
              <span className={`block w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'group-hover:w-7'}`}></span>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-out ${isMenuOpen ? 'max-h-80 opacity-100 mt-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="glass-card rounded-2xl p-4 backdrop-blur-xl">
            <ul className="flex flex-col space-y-1">
              <li>
                <a 
                  href="#about" 
                  onClick={closeMenu} 
                  className="block py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:text-purple-400"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={closeMenu} 
                  className="block py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:text-purple-400"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  onClick={closeMenu} 
                  className="block py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:text-purple-400"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={closeMenu} 
                  className="block py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 hover:text-purple-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
