import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if user has a preference, otherwise default to dark
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    updateTheme(shouldBeDark);
  }, []);

  const updateTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0f0f23';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#1a1a1a';
    }
  };

  const toggleTheme = () => {
    const newDarkState = !isDark;
    setIsDark(newDarkState);
    updateTheme(newDarkState);
    localStorage.setItem('theme', newDarkState ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme} 
      aria-label="Toggle theme"
      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 text-white hover:text-purple-400 hover:scale-110 active:scale-95"
    >
      {isDark ? (
        <Sun size={18} className="transition-transform duration-300 hover:rotate-90" />
      ) : (
        <Moon size={18} className="transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
