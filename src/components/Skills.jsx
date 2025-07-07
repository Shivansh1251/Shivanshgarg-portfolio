// src/components/Skills.jsx
export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js",
    "Express", "MongoDB", "TailwindCSS", "Git", "GitHub",
    "Vite", "Postman", "Firebase"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">🛠️ Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-800 border border-cyan-500 text-sm px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
