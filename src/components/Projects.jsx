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
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">🚀 Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                {proj.title}
              </h3>
              <p className="text-gray-300 mb-5">{proj.desc}</p>
              <a
                href={proj.link}
                target="_blank"
                className="inline-block text-sm font-semibold text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-full transition"
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
