import type { PortfolioData } from "../App";

function Projects({ data }: { data: PortfolioData | null }) {
  return (
    <section id="proyectos">
      <div className="Cards items-center gap-4 p-4">
        <h1 className="text-3xl font-semibold uppercase mb-5 text-left">
          Proyectos
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {data?.projects ? (
            Object.entries(data.projects).map(
              ([key, project]: [string, Project]) => (
                <div key={key}>
                  <div className="overflow-hidden rounded-sm shadow-md transition-transform duration-300 hover:scale-105 h-full">
                    <div className="h-50 overflow-hidden">
                      <img
                        src={project.image}
                        alt="Project 1"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 text-left">
                        {project.name}
                      </h3>
                      <p className="mt-2 text-gray-600 text-left">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <ul>
                          {project.technologies.length > 0 ? (
                            project.technologies.map((tech, idx) => (
                              <li key={tech}>*{tech}</li>

                              // <span
                              //   key={tech}
                              //   className="rounded-full bg-white-100 px-3 py-1 text-xs font-medium text-gray-800 border-gray-100 border"
                              // >
                              //   {tech}
                              // </span>
                            ))
                          ) : (
                            <span className="text-xs text-gray-400">
                              Sin tecnologías
                            </span>
                          )}
                        </ul>
                      </div>
                      <a
                        href={project.url}
                        className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        Ver más
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-1 h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <p>Cargando proyectos...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
