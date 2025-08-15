// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "OasisReserve",
      desc: "A full-stack hotel/spa/salon booking app built with Node.js, Express, MongoDB.",
      link: "https://github.com/Shivansh1251/OasisReserve",
    },
    {
      title: "Scientific Calculator",
      desc: "A powerful calculator with advanced math functions and a beautiful UI.",
      link: "https://github.com/Shivansh1251/Scientific-Calculator",
    },
    {
      title: "shivanshgarg.me",
      desc: "My personal portfolio website built with React + Tailwind + Vite.",
      link: "https://shivanshgarg.me",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">🚀 Projects</h2>
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-2 sm:mb-3">
                {proj.title}
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed">{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-full transition-colors duration-300"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
