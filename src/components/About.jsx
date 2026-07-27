import { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

export default function About() {
  const titleRef = useReveal()
  const card1Ref = useReveal()
  const card2Ref = useReveal()

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 reveal-up" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="text-gradient">About </span>
            <span className="text-white light:text-gray-900">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Who I Am */}
          <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl reveal-up" ref={card1Ref}>
            <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-6 sm:mb-8">
              Who I Am
            </h3>
            <p className="text-base sm:text-lg text-gray-300 light:text-gray-600 leading-relaxed mb-4 sm:mb-6">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I love creating innovative solutions that bridge the gap between design and robust functionality.
            </p>
            <p className="text-base sm:text-lg text-gray-300 light:text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              and expanding my architectural knowledge.
            </p>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                {
                  label: 'Open Source',
                  value: 'Contributor',
                  icon: <svg className="w-6 h-6 text-purple-400 light:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                },
                {
                  label: 'Experience',
                  value: 'Full-Stack',
                  icon: <svg className="w-6 h-6 text-blue-400 light:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                },
                {
                  label: 'Focus',
                  value: 'Architecture',
                  icon: <svg className="w-6 h-6 text-pink-400 light:text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                },
                {
                  label: 'Status',
                  value: 'Available',
                  icon: <svg className="w-6 h-6 text-emerald-400 light:text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                },
              ].map(({ label, value, icon }) => (
                <div key={label} className="bg-gray-800/40 light:bg-gray-100 rounded-xl p-4 text-center border border-gray-700/30 light:border-gray-200">
                  <div className="flex justify-center mb-2">{icon}</div>
                  <div className="text-xs text-gray-500 light:text-gray-500 mb-1 font-medium tracking-wide uppercase">{label}</div>
                  <div className="text-sm font-semibold text-white light:text-gray-900">{value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What I Do */}
          <div className="glass-card p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl reveal-up" ref={card2Ref}>
            <h3 className="text-2xl sm:text-3xl font-bold text-gradient mb-6 sm:mb-8">
              What I Do
            </h3>
            <div className="space-y-6">
              {[
                {
                  label: 'Frontend Development',
                  gradient: 'from-purple-400 to-pink-400',
                  desc: 'React, TailwindCSS, modern UI architecture',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                },
                {
                  label: 'Backend Engineering',
                  gradient: 'from-blue-400 to-cyan-400',
                  desc: 'Node.js, Express, scalable REST APIs',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                },
                {
                  label: 'Database Design',
                  gradient: 'from-green-400 to-teal-400',
                  desc: 'MongoDB, PostgreSQL, optimized queries',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                },
                {
                  label: 'System Automation',
                  gradient: 'from-yellow-400 to-orange-400',
                  desc: 'Python scripting, CI/CD, deployment workflows',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                },
              ].map(({ label, gradient, desc, icon }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  <div className="pt-1">
                    <div className="text-base font-semibold text-white light:text-gray-900">{label}</div>
                    <div className="text-sm text-gray-500 light:text-gray-600 mt-1 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
