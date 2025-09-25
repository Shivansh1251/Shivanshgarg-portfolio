/* filepath: d:\shivanshgarg-portfolio\src\components\Hero.jsx */
import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [titleIndex, setTitleIndex] = useState(0)
  
  const titles = [
    "Full-Stack Developer",
    "Open Source Contributor", 
    "Cloud Developer",
    "Problem Solver",
    "Tech Innovator",
    "Software Engineer"
  ]

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    
    if (currentIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentTitle[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      // Wait 2 seconds before starting to delete
      const deleteTimeout = setTimeout(() => {
        const deleteInterval = setInterval(() => {
          setDisplayText(prev => {
            if (prev.length > 0) {
              return prev.slice(0, -1)
            } else {
              clearInterval(deleteInterval)
              setCurrentIndex(0)
              setTitleIndex(prev => (prev + 1) % titles.length)
              return ''
            }
          })
        }, 50)
      }, 2000)
      return () => clearTimeout(deleteTimeout)
    }
  }, [currentIndex, titleIndex, titles])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-20 sm:pt-24">
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-15 float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25 float" style={{ animationDelay: '4s' }}></div>

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        {/* Profile Image with Glow */}
        <div className="mb-8 sm:mb-12 relative inline-block">
          <div className="relative">
            {/* Outer Rotating Glow */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 animate-spin-slow blur-sm"></div>
            
            {/* Avatar Container */}
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden border-4 border-white light:border-gray-300 shadow-2xl bg-white light:bg-gray-100">
              <img 
                src="/Avtar.png" 
                alt="Shivansh Garg" 
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                loading="eager"
              />
            </div>
            
            {/* Inner Pulsing Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-red-500/20 animate-pulse"></div>
          </div>
        </div>

        {/* Animated Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 fade-in-up">
          <span className="text-gradient">Shivansh</span>
          <span className="text-white light:text-gray-800"> Garg</span>
        </h1>

        {/* Typewriter Effect */}
        <div className="h-12 sm:h-16 mb-6 sm:mb-8">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-light text-gray-300 light:text-gray-600">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 light:text-gray-600 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto leading-relaxed fade-in-up px-4 sm:px-0">
          Crafting digital experiences with modern technologies. 
          Passionate about creating scalable web applications that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center fade-in-up px-4 sm:px-0">
          <a
            href="#projects"
            className="modern-button px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="modern-button px-6 sm:px-8 py-3 sm:py-4 glass-card text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
          >
            Get In Touch
          </a>
        </div>


      </div>
    </section>
  )
}
