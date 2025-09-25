/* filepath: d:\shivanshgarg-portfolio\src\components\Hero.jsx */
import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const fullText = "Full-Stack Developer"

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-15 float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25 float" style={{ animationDelay: '4s' }}></div>

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        {/* Profile Image with Glow */}
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden glow">
            <img 
              src="/Avtar.png" 
              alt="Shivansh Garg" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-20 animate-pulse"></div>
        </div>

        {/* Animated Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-4 fade-in-up">
          <span className="text-gradient">Shivansh</span>
          <span className="text-white"> Garg</span>
        </h1>

        {/* Typewriter Effect */}
        <div className="h-16 mb-8">
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed fade-in-up">
          Crafting digital experiences with modern technologies. 
          Passionate about creating scalable web applications that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center fade-in-up">
          <a
            href="#projects"
            className="modern-button px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="modern-button px-8 py-4 glass-card text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>


      </div>
    </section>
  )
}
