// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Shivansh 👋</h1>
      <p className="text-lg md:text-xl mt-4 max-w-xl text-gray-300">
        A passionate Computer Science student at Chitkara University, building clean, modern, full-stack apps.
      </p>
      <a
        href="#projects"
        className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition"
      >
        View My Work
      </a>
    </section>
  );
}
