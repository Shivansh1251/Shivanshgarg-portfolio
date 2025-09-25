// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="section-3d px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title font-black mb-6">
            <span className="text-gradient text-highlight">Get In</span> 
            <span className="text-white text-highlight"> Touch</span>
          </h2>
          <div className="section-divider mx-auto"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-highlight">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>
        
        <div className="contact-enhanced">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gradient mb-6 text-highlight">
                  Let's Connect
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed text-highlight">
                  Have a project, internship, or collaboration idea? 
                  I'm always excited to work on innovative projects and connect with fellow developers.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-highlight">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg text-white">shivanshgarg2005@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-highlight">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">🌐</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Portfolio</p>
                    <p className="text-lg text-white">shivanshgarg.me</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-highlight">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                    <span className="text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Response Time</p>
                    <p className="text-lg text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Actions */}
            <div className="contact-card">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 text-highlight">Ready to Start?</h4>
                <p className="text-gray-300 text-highlight">
                  Send me a message and let's discuss your project
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href="mailto:shivanshgarg2005@gmail.com"
                  className="contact-button w-full text-center text-white block transition-all duration-300"
                >
                  📧 Send Email
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/Shivansh1251"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-button glass-card text-white text-center transition-all duration-300 py-3"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/shivansh-garg-22113a294"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modern-button glass-card text-white text-center transition-all duration-300 py-3"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="flex justify-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-400 text-highlight">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
