// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 text-center min-h-[60vh]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Hi, I'm Shivansh 👋
      </h1>
      <p className="text-base sm:text-lg md:text-xl mt-4 max-w-xl text-gray-300 leading-relaxed">
        A passionate Computer Science student at Chitkara University, building clean, modern, full-stack apps.
      </p>
      <a
        href="#projects"
        className="mt-6 sm:mt-8 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold transition-colors duration-300 text-sm sm:text-base"
      >
        View My Work
      </a>
    </section>
  );
}
