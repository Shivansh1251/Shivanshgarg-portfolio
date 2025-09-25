// src/components/Skills.jsx
export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS", "Vite"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Backend", 
      skills: ["Node.js", "Express", "MongoDB", "Firebase"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="skills" className="section-3d section-container px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
          <span className="text-gradient">Technical</span> Skills
        </h2>
        <div className="section-divider mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-3d-enhanced glass-card rounded-3xl p-8">
              <div className={`h-1 w-full bg-gradient-to-r ${category.gradient} rounded-full mb-6`}></div>
              <h3 className="text-2xl font-bold text-gradient mb-6">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gray-800/50 border border-gray-700 text-sm px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-700/50 hover:to-gray-600/50 hover:border-purple-500/30 transition-all duration-300 transform hover:scale-105"
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
