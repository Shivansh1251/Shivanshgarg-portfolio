// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Get In</span>
            <span className="text-white"> Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Have a project, internship, or collaboration idea? 
                I'm always excited to work on innovative projects and connect with fellow developers.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:shivanshgarg2005@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg text-white group-hover:text-purple-400 transition-colors">shivanshgarg2005@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://shivanshgarg.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/30 hover:bg-gray-800/50 transition-all duration-300 group hover:scale-105"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Portfolio</p>
                    <p className="text-lg text-white group-hover:text-blue-400 transition-colors">shivanshgarg.me</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-xl bg-gray-800/30">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Response Time</p>
                    <p className="text-lg text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:rotate-12 transition-transform duration-300">
                <span className="text-3xl">🚀</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Ready to Start?</h4>
              <p className="text-gray-300">
                Send me a message and let's discuss your project
              </p>
            </div>
            
            <div className="space-y-6">
              <a
                href="mailto:shivanshgarg2005@gmail.com"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold text-center block hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                📧 Send Email
              </a>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/Shivansh1251"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/50 hover:bg-gray-700/50 text-white text-center py-4 px-4 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-gray-600"
                >
                  🐙 GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shivansh-garg-22113a294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600/20 hover:bg-blue-600/30 text-white text-center py-4 px-4 rounded-xl transition-all duration-300 hover:scale-105 border border-blue-600/30 hover:border-blue-500"
                >
                  💼 LinkedIn
                </a>
              </div>
              
              <a
                href="https://github.com/Shivansh1251"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white py-4 px-6 rounded-xl font-semibold text-center block hover:from-gray-700 hover:to-gray-600 transition-all duration-300 hover:scale-105"
              >
                🚀 View All Projects on GitHub
              </a>
            </div>

            <div className="mt-8 text-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400">Available for new projects</span>
                </div>
                <div className="text-xs text-gray-500 space-y-1">
                  <p>💻 Active on GitHub • 🌟 Open Source Contributor</p>
                  <p>🤖 AI/ML Enthusiast • 🎨 UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
