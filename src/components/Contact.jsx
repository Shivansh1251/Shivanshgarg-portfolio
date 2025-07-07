// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">📬 Contact Me</h2>
        <p className="text-gray-300 mb-6">
          Have a project, internship, or idea you want to discuss? Feel free to reach out!
        </p>
        <a
          href="mailto:shivanshgargme@gmail.com"
          className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition"
        >
          Email Me
        </a>
        <div className="mt-8 flex justify-center gap-6 text-xl">
          <a
            href="https://github.com/Shivansh1251"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shivansh-garg-12345678"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
