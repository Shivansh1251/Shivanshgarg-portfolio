// src/components/Skills.jsx
export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js",
    "Express", "MongoDB", "TailwindCSS", "Git", "GitHub",
    "Vite", "Postman", "Firebase"
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">🛠️ Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-800 border border-cyan-500 text-xs sm:text-sm px-3 py-2 sm:px-4 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
