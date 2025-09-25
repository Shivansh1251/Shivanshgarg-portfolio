export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="text-gradient text-highlight">About </span> 
            <span className="text-white text-highlight">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6 sm:mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-6 sm:mb-8 text-highlight">
              Who I Am
            </h3>
            <p className="text-base sm:text-lg text-gray-300 light:text-gray-600 leading-relaxed mb-4 sm:mb-6 text-highlight">
              I'm a passionate full-stack developer with expertise in modern web technologies. 
              I love creating innovative solutions that bridge the gap between design and functionality.
            </p>
            <p className="text-base sm:text-lg text-gray-300 light:text-gray-600 leading-relaxed text-highlight">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-6 sm:mb-8 text-highlight">
              What I Do
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-4 sm:space-x-6 text-highlight">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg text-gray-300 light:text-gray-600">Frontend Development</span>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-6 text-highlight">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg text-gray-300 light:text-gray-600">Backend Development</span>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-6 text-highlight">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg text-gray-300 light:text-gray-600">Database Design</span>
              </div>
              <div className="flex items-center space-x-4 sm:space-x-6 text-highlight">
                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex-shrink-0"></div>
                <span className="text-base sm:text-lg text-gray-300 light:text-gray-600">API Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
