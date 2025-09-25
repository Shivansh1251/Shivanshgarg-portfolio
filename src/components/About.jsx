export default function About() {
  return (
    <section id="about" className="section-3d px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title font-black mb-6">
            <span className="text-gradient text-highlight">About</span> 
            <span className="text-white text-highlight">Me</span>
          </h2>
          <div className="section-divider mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="card-3d-enhanced glass-card p-12">
            <h3 className="text-3xl font-bold text-gradient mb-8 text-highlight">
              Who I Am
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 text-highlight">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating innovative solutions that bridge the gap between design and functionality.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-highlight">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="card-3d-enhanced glass-card p-12">
            <h3 className="text-3xl font-bold text-gradient mb-8 text-highlight">
              What I Do
            </h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-6 text-highlight">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <span className="text-lg text-gray-300">Frontend Development</span>
              </div>
              <div className="flex items-center space-x-6 text-highlight">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                <span className="text-lg text-gray-300">Backend Development</span>
              </div>
              <div className="flex items-center space-x-6 text-highlight">
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                <span className="text-lg text-gray-300">Database Design</span>
              </div>
              <div className="flex items-center space-x-6 text-highlight">
                <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                <span className="text-lg text-gray-300">API Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
