import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen py-16 sm:py-20 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16"></div>

        <div className="grid gap-12 lg:gap-20 md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Hi, I’m Junaied Hasan
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              I’m a frontend developer passionate about building clean,
              responsive, and user-friendly web applications. I enjoy turning
              complex problems into simple and intuitive interfaces using modern
              web technologies.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              Currently, I focus on React, Next.js, and Tailwind CSS, and I’m
              constantly learning new tools and best practices to improve
              performance and user experience.
            </p>

            <ul className="space-y-3 inline-block text-left">
              <li className="flex items-center gap-3 text-gray-300">
                <FaCode className="text-blue-400 text-lg" />
                Strong foundation in HTML, CSS & JavaScript
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaLaptopCode className="text-green-400 text-lg" />
                Building modern apps with React & Next.js
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaLightbulb className="text-yellow-400 text-lg" />
                Always learning and improving
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className=" rounded-2xl p-4 sm:p-6 border-gray-700 w-full max-w-xs sm:max-w-sm">
              <img
                src="/mm.png"
                alt="Junaied Hasan"
                className="rounded-xl mb-4 w-full object-cover"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
