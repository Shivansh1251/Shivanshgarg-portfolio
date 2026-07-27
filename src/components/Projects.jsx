import { useState } from 'react'

const GRADIENTS = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-500 to-teal-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-violet-500',
  'from-yellow-500 to-orange-500',
]

/** Returns a microlink screenshot image URL for any public URL */
function screenshotOf(url) {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`
}

function ProjectCard({ project, index }) {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const liveUrl = project.homepage || null
  const repoUrl = project.html_url
  const previewUrl = screenshotOf(liveUrl || repoUrl)
  const gradient = GRADIENTS[index % GRADIENTS.length]

  return (
    <div className="glass-card rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 light:hover:shadow-purple-500/5 group border border-gray-800/50 light:border-gray-200/80">
      {/* ── Preview panel ── */}
      <div className="relative h-48 bg-gray-900/60 light:bg-gray-100 overflow-hidden flex-shrink-0">
        <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${gradient} z-10`} />

        {/* Loading spinner */}
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <div className="w-6 h-6 border-2 border-purple-500/50 border-t-purple-500 rounded-full animate-spin" />
          </div>
        )}

        {/* Screenshot image */}
        {!imgError && (
          <img
            src={previewUrl}
            alt={`${project.name} preview`}
            className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}

        {/* Fallback when screenshot fails */}
        {imgError && (
          <div className={`h-full bg-gradient-to-br ${gradient} opacity-5 light:opacity-10 flex flex-col items-center justify-center gap-2`}>
            <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="text-xs text-gray-500 font-medium">Preview unavailable</span>
          </div>
        )}

        {/* Hover overlay with action buttons */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10 backdrop-blur-sm">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-white text-gray-900 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 01-9-9" />
              </svg>
              Live Site
            </a>
          )}
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors border border-gray-600 shadow-lg"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Source
          </a>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-bold text-white light:text-gray-900 group-hover:text-gradient transition-all duration-300 leading-tight">
            {project.name}
          </h3>
          {project.stargazers_count > 0 && (
            <span className="flex items-center gap-1.5 text-xs text-gray-400 light:text-gray-500 bg-gray-800/30 light:bg-gray-100 px-2 py-1 rounded-md flex-shrink-0 border border-gray-700/30 light:border-gray-200">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              {project.stargazers_count}
            </span>
          )}
        </div>

        <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.topics.map((t, i) => (
            <span key={i} className="px-2.5 py-1 text-xs font-medium bg-gray-800/50 light:bg-gray-200/60 text-cyan-400 light:text-cyan-700 rounded-md border border-cyan-500/20 light:border-cyan-600/20">
              {t}
            </span>
          ))}
        </div>

        {/* Footer stats */}
        <div className="flex items-center gap-4 text-xs font-medium text-gray-500 light:text-gray-500 pt-4 border-t border-gray-800/50 light:border-gray-200/80">
          <span className="flex items-center gap-1.5 text-purple-400 light:text-purple-600">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            {project.language}
          </span>
          {liveUrl && (
            <span className="flex items-center gap-1.5 text-emerald-400 light:text-emerald-600 ml-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live Deployment
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  // Hardcoded projects to avoid GitHub API rate limiting ("Could not load projects")
  const projects = [
    {
      id: 1,
      name: "DoodleSync",
      description: "Realtime Whiteboard and Chatbot application for seamless collaborative drawing and team communication.",
      html_url: "https://github.com/Shivansh1251/DoodleSync",
      homepage: null,
      language: "React",
      topics: ["React", "Socket.io", "Node.js", "Canvas API"],
      stargazers_count: 5
    },
    {
      id: 2,
      name: "GitMate AI Agent",
      description: "An AI-powered agent designed to automatically maintain GitHub contribution streaks and manage repositories.",
      html_url: "https://github.com/Shivansh1251/GitMate-AIAgent-MaintainsStreak",
      homepage: null,
      language: "Python",
      topics: ["Python", "Machine Learning", "Automation", "GitHub API"],
      stargazers_count: 3
    },
    {
      id: 3,
      name: "Dreamscape",
      description: "An immersive digital experience platform featuring stunning WebGL visuals, intricate animations, and interactive elements.",
      html_url: "https://github.com/Shivansh1251/Dreamscape",
      homepage: null,
      language: "JavaScript",
      topics: ["JavaScript", "WebGL", "CSS3", "HTML5"],
      stargazers_count: 7
    },
    {
      id: 4,
      name: "OasisReserve",
      description: "A comprehensive full-stack hotel, spa, and salon booking ecosystem built with robust MERN architecture.",
      html_url: "https://github.com/Shivansh1251/OasisReserve",
      homepage: null,
      language: "JavaScript",
      topics: ["Node.js", "MongoDB", "Express", "React"],
      stargazers_count: 4
    }
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="text-gradient">Featured</span> <span className="text-white light:text-gray-900">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 light:text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Showcasing architectural problem-solving and full-stack development expertise.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {projects.map((proj, index) => (
            <ProjectCard key={proj.id} project={proj} index={index} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="https://github.com/Shivansh1251?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 glass-card rounded-full text-white light:text-gray-900 font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700/50 light:border-gray-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View GitHub Repositories
          </a>
        </div>
      </div>
    </section>
  )
}
