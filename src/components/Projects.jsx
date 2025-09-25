// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "OasisReserve",
      desc: "A full-stack hotel/spa/salon booking app built with Node.js, Express, MongoDB.",
      link: "https://github.com/Shivansh1251/OasisReserve",
      tech: ["Node.js", "MongoDB", "Express", "React"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Scientific Calculator",
      desc: "A powerful calculator with advanced math functions and a beautiful UI.",
      link: "https://github.com/Shivansh1251/Scientific-Calculator",
      tech: ["JavaScript", "CSS", "HTML"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "shivanshgarg.me",
      desc: "My personal portfolio website built with React + Tailwind + Vite.",
      link: "https://shivanshgarg.me",
      tech: ["React", "Tailwind", "Vite"],
      gradient: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="text-gradient">Featured</span> Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing my latest work in web development and digital innovation
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 card-3d group"
            >
              {/* Project Header */}
              <div className={`h-2 w-full bg-gradient-to-r ${proj.gradient} rounded-full mb-6`}></div>
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                {proj.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">{proj.desc}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-gray-800/50 text-cyan-400 rounded-full border border-cyan-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="modern-button inline-flex items-center gap-2 text-white bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-3 rounded-full font-semibold hover:from-gray-600 hover:to-gray-500 transition-all duration-300"
              >
                View Project
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
