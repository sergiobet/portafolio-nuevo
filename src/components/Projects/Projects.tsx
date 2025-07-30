import type { PortfolioData, Project } from "../../App";

import styles from "./Projects.module.css";

const Projects = ({ data }: { data: PortfolioData | null }) => {
  return (
    <section id="proyectos">
      <h1 className="text-left text-4xl font-semibold">Proyectos</h1>
      <br />
      <br />
      {data?.projects ? (
        <div className="grid gap-8 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
          {Object.entries(data.projects).map(
            ([key, projects]: [string, Project]) => (
              <a href={projects.url} target="_blank" key={key}>
                <div className={styles.card}>
                  <div className={styles.card__item}></div>
                  <img
                    src={projects.image}
                    width="100%"
                    height="100%"
                    alt="vista previa del proyecto"
                    className="rounded-lg w-full h-full"
                  />

                  <div className={styles.card__content}>
                    <p className={styles.card__title}>{projects.title}</p>
                    <p className={`${styles.card__description} text-center`}>
                      {projects.description}
                    </p>
                    <br />
                    <div>
                      {projects.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block mr-1 last:mr-0 rounded-lg border bg-gray-800 border-gray-500 px-2.5 py-0.5 text-sm whitespace-nowrap text-white mb-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <br />
                  </div>
                </div>
              </a>
            )
          )}
        </div>
      ) : (
        <p>Cargando proyectos...</p>
      )}
    </section>
  );
};

export default Projects;
