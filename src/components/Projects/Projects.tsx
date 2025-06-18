import type { PortfolioData } from "../App";
import styles from "./Projects.module.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Projects({ data }: { data: PortfolioData | null }) {
  let projectsData: PortfolioData[];

  if (data?.projects) {
   projectsData = data?.projects
  }

  
  return (
    <section id="proyectos">
      <h1 className="text-left text-4xl font-semibold">Proyectos</h1>
      <br /><br />
      {data?.projects ? (
        <div className="grid gap-8 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3">
          {Object.entries(data.projects).map(
              ([key, project]: [string, Project]) => (
            <div key={key} className={styles.card}>
              <div className={styles.card__item}></div>
              <img
                src={project.image}
                alt="vista previa del proyecto"
                className="rounded-lg"
              />
              {/* <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg> */}
              <div className={styles.card__content}>
                <p className={styles.card__title}>{project.title}</p>
                <p className={`${styles.card__description} text-left`}>
                  {project.description}
                </p>
                <br /><br />
                <a href={project.url} target="_blank" className="border border-gray-300 rounded-lg p-2 inline-flex text-gray-900 pl-5 hover:bg-gray-800 hover:text-white"> Ir al sitio
                  <ArrowRightIcon className="h-5 !scale-none !transform-none p-0 pr-0 ml-0 pt-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando proyectos...</p>
      )}
    </section>
  );
}

export default Projects;
