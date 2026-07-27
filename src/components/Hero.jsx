import { useEffect, useState } from 'react'

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [titleIndex, setTitleIndex] = useState(0)

  const titles = [
    'Full-Stack Developer',
    'Open Source Contributor',
    'Cloud Developer',
    'Problem Solver',
    'Tech Innovator',
    'Software Engineer',
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
  }, [currentIndex, titleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-20 sm:pt-24">
      {/* Floating orbs — now actually animate thanks to .float CSS */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 float pointer-events-none blur-sm" style={{ animationDelay: '0s' }} />
      <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-[0.15] float pointer-events-none blur-sm" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-25 float pointer-events-none blur-sm" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 right-1/6 w-10 h-10 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-20 float pointer-events-none blur-sm" style={{ animationDelay: '3s' }} />

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        {/* Avatar */}
        <div className="mb-8 sm:mb-12 relative inline-block fade-in-up" style={{ animationDelay: '0s' }}>
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-75 animate-spin-slow blur-sm" />
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
              <img
                src="/Avtar.png"
                alt="Shivansh Garg"
                className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                loading="eager"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-red-500/20 animate-pulse" />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 fade-in-up" style={{ animationDelay: '0.15s' }}>
          <span className="text-gradient">Shivansh</span>
          <span className="text-white"> Garg</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 sm:h-14 mb-6 sm:mb-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-light text-gray-300">
            {displayText}
            <span className="animate-pulse text-purple-400">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto leading-relaxed fade-in-up px-4 sm:px-0" style={{ animationDelay: '0.45s' }}>
          Crafting digital experiences with modern technologies.
          Passionate about creating scalable web applications that make a difference.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center fade-in-up px-4 sm:px-0" style={{ animationDelay: '0.6s' }}>
          <a
            href="#projects"
            className="modern-button px-7 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 text-center"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download="Shivansh_Garg_Resume.pdf"
            className="modern-button px-7 sm:px-8 py-3 sm:py-4 glass-card text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2 border border-white/10"
          >
            {/* Download icon */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Resume
          </a>
          <a
            href="#contact"
            className="modern-button px-7 sm:px-8 py-3 sm:py-4 border border-purple-500/40 text-white rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 hover:border-purple-400 transition-all duration-300 text-center"
          >
            Get In Touch
          </a>
        </div>

        {/* Social quick-links */}
        <div className="flex items-center justify-center gap-5 mt-8 sm:mt-10 fade-in-up" style={{ animationDelay: '0.75s' }}>
          <a href="https://github.com/Shivansh1251" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300 hover:scale-110 transform">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/shivansh-garg-22113a294/" target="_blank" rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="mailto:shivanshgarg2005@gmail.com"
            className="text-gray-500 hover:text-purple-400 transition-colors duration-300 hover:scale-110 transform">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center gap-1 text-gray-600 animate-bounce">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
