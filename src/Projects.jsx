import projects from "../public/projects.json";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen py-16 sm:py-20 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My Projects
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base">
            Some of the projects I’ve built recently
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => window.open(project.link, "_blank")}
              className="cursor-pointer bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 hover:scale-105 transition transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />

              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-gray-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 sm:px-3 py-1 rounded-full bg-gray-700 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.link, "_blank");
                  }}
                  className="mt-5 w-full py-2 sm:py-2.5 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
