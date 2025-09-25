import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const toggle = () => {
    if (dark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDark(!dark);
  };
  return (
    <button onClick={toggle} aria-label="Toggle theme">
      {dark ? <Sun /> : <Moon />}
    </button>
  );
}
