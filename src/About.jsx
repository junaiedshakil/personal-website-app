import { FaCode, FaLaptopCode, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen py-20 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Hi, I’m Junaied Hasan
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              I’m a frontend developer passionate about building clean,
              responsive, and user-friendly web applications. I enjoy turning
              complex problems into simple and intuitive interfaces using modern
              web technologies.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Currently, I focus on React, Next.js, and Tailwind CSS, and I’m
              constantly learning new tools and best practices to improve
              performance and user experience.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <FaCode className="text-blue-400" />
                Strong foundation in HTML, CSS & JavaScript
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaLaptopCode className="text-green-400" />
                Building modern apps with React & Next.js
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaLightbulb className="text-yellow-400" />
                Always learning and improving
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 max-w-sm">
              <img
                src="/photo1.png"
                alt="Junaied Hasan"
                className="rounded-xl mb-4"
              />
              <p className="text-center text-gray-400 text-sm">
                Frontend Developer • React • Next
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
