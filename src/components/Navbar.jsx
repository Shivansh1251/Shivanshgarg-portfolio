// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">Shivansh Garg</h1>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
