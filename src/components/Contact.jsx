// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-900 text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">📬 Contact Me</h2>
        <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
          Have a project, internship, or idea you want to discuss? Feel free to reach out!
        </p>
        <a
          href="mailto:shivanshgarg2005@gmail.com"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 sm:px-8 sm:py-3 rounded-full font-semibold transition-colors duration-300 text-sm sm:text-base"
        >
          Email Me
        </a>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 text-lg sm:text-xl">
          <a
            href="https://github.com/Shivansh1251"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300 py-2"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shivansh-garg-22113a294"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300 py-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
