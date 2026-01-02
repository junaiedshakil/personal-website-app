import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-16 sm:py-20 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10 sm:mb-12 text-sm sm:text-base">
          I’m open to opportunities and collaborations. Connect with me!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="mailto:junaiedshakil067@gmail.com"
            className="w-full md:flex-1 flex flex-col items-center p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-500 hover:scale-105 transition duration-300"
          >
            <FaEnvelope className="text-3xl text-blue-400 mb-3" />
            <h3 className="text-lg font-semibold text-white">Email</h3>
            <p className="text-gray-400 text-sm mt-1">Send me an email</p>
          </a>

          <a
            href="https://www.linkedin.com/in/junaied-hasan-1526b92a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:flex-1 flex flex-col items-center p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-500 hover:scale-105 transition duration-300"
          >
            <FaLinkedin className="text-3xl text-blue-600 mb-3" />
            <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
            <p className="text-gray-400 text-sm mt-1">
              Let’s connect professionally
            </p>
          </a>

          <a
            href="https://github.com/junaiedhasan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:flex-1 flex flex-col items-center p-6 bg-gray-800 rounded-2xl border border-gray-700 hover:border-gray-500 hover:scale-105 transition duration-300"
          >
            <FaGithub className="text-3xl text-gray-300 mb-3" />
            <h3 className="text-lg font-semibold text-white">GitHub</h3>
            <p className="text-gray-400 text-sm mt-1">View my projects</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
