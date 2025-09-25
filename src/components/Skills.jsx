// src/components/Skills.jsx
export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Vite", "Canvas API", "WebGL"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express", "MongoDB", "Socket.io", "Python", "REST APIs", "GitHub API"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Tools & AI",
      skills: ["Git", "GitHub", "VS Code", "AI/ML", "Automation", "Postman", "Firebase"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
          <span className="text-gradient">Technical</span> Skills
        </h2>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-12 sm:mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <div className={`h-1 w-full bg-gradient-to-r ${category.gradient} rounded-full mb-4 sm:mb-6`}></div>
              <h3 className="text-xl sm:text-2xl font-bold text-gradient mb-4 sm:mb-6">{category.title}</h3>
              <div className="space-y-2 sm:space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-800/50 light:bg-gray-200/80 border border-gray-700 light:border-gray-300 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-gray-600/50 light:hover:from-gray-300/50 light:hover:to-gray-200/50 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105 text-white light:text-gray-800"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
