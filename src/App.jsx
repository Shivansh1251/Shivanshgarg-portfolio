import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import { Analytics } from "@vercel/analytics/react"
function App() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate particles with count and size responsive to viewport width
    const particleArray = []
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200
    // Choose particle count based on screen size
    let count = 60
    if (width < 640) count = 28
    else if (width < 1024) count = 45
    else if (width < 1440) count = 65
    else count = 90

    for (let i = 0; i < count; i++) {
      // Size range increased for better visibility: 2px - 9px
      const size = Math.random() * 7 + 2
      particleArray.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 20,
        size: Math.round(size),
      })
    }
    setParticles(particleArray)
  }, [])

  return (
    <div className="bg-gray-950 text-white text-base animated-gradient min-h-screen relative overflow-hidden transition-all duration-300">
      {/* Particle Background */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.animationDelay}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Animated cursor (renders nothing on touch devices) */}
      <div className="relative">
        <Cursor />
      </div>

      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  )
}

export default App
