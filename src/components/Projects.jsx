// src/components/Projects.jsx
export default function Projects() {
  const projects = [
    {
      title: "DoodleSync",
      desc: "Realtime Whiteboard + Chatbot application for collaborative drawing and communication.",
      link: "https://github.com/Shivansh1251/DoodleSync",
      tech: ["React", "Socket.io", "Node.js", "Canvas API"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "GitMate AI Agent",
      desc: "AI-powered agent that automatically maintains GitHub contribution streaks and manages repositories.",
      link: "https://github.com/Shivansh1251/GitMate-AIAgent-MaintainsStreak",
      tech: ["Python", "AI/ML", "GitHub API", "Automation"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Dreamscape",
      desc: "An immersive digital experience platform with stunning visuals and interactive elements.",
      link: "https://github.com/Shivansh1251/Dreamscape",
      tech: ["JavaScript", "WebGL", "CSS3", "HTML5"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "OasisReserve",
      desc: "A full-stack hotel/spa/salon booking app built with Node.js, Express, MongoDB.",
      link: "https://github.com/Shivansh1251/OasisReserve",
      tech: ["Node.js", "MongoDB", "Express", "React"],
      gradient: "from-orange-500 to-red-500",
    },
    // {
    //   title: "shivanshgarg.me",
    //   desc: "My personal portfolio website built with React + Tailwind + Vite.",
    //   link: "https://shivanshgarg.me",
    //   tech: ["React", "Tailwind", "Vite"],
    //   gradient: "from-indigo-500 to-purple-500",
    // },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="text-gradient">Featured</span> Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 light:text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Showcasing my latest work in web development and digital innovation
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Project Header */}
              <div className={`h-1.5 sm:h-2 w-full bg-gradient-to-r ${proj.gradient} rounded-full mb-4 sm:mb-6`}></div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 text-white light:text-gray-800 group-hover:text-gradient transition-all duration-300">
                {proj.title}
              </h3>
              
              <p className="text-gray-300 light:text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base lg:text-lg">{proj.desc}</p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {proj.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-800/50 light:bg-gray-200/80 text-cyan-400 light:text-cyan-600 rounded-full border border-cyan-400/20 light:border-cyan-600/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 bg-gradient-to-r ${proj.gradient} text-white hover:shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto`}
              >
                View Project
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
