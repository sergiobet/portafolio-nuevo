import type { PortfolioData } from "../App";
import styles from "./Projects.module.css";

function Projects({ data }: { data: PortfolioData | null }) {
  return (
    // <section id="proyectos">
    //   <div className="Cards items-center gap-4 p-4">
    //     <h1 className="text-3xl font-semibold uppercase mb-5 text-left">
    //       Proyectos
    //     </h1>
    //     <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
    //       {data?.projects ? (
    //         Object.entries(data.projects).map(
    //           ([key, project]: [string, Project]) => (
    //             <div key={key}>
    //               <div className="overflow-hidden rounded-sm shadow-md transition-transform duration-300 hover:scale-105 h-full">
    //                 <div className="h-50 overflow-hidden">
    //                   <img
    //                     src={project.image}
    //                     alt="Project 1"
    //                     className="h-full w-full object-cover"
    //                   />
    //                 </div>
    //                 <div className="p-6">
    //                   <h3 className="text-xl font-semibold text-gray-900 text-left">
    //                     {project.name}
    //                   </h3>
    //                   <p className="mt-2 text-gray-600 text-left">
    //                     {project.description}
    //                   </p>
    //                   <div className="mt-4 flex flex-wrap gap-2">
    //                     <ul>
    //                       {project.technologies.length > 0 ? (
    //                         project.technologies.map((tech, idx) => (
    //                           <li key={tech}>*{tech}</li>

    //                           // <span
    //                           //   key={tech}
    //                           //   className="rounded-full bg-white-100 px-3 py-1 text-xs font-medium text-gray-800 border-gray-100 border"
    //                           // >
    //                           //   {tech}
    //                           // </span>
    //                         ))
    //                       ) : (
    //                         <span className="text-xs text-gray-400">
    //                           Sin tecnologías
    //                         </span>
    //                       )}
    //                     </ul>
    //                   </div>
    //                   <a
    //                     href={project.url}
    //                     className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
    //                   >
    //                     Ver más
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       className="ml-1 h-5 w-5"
    //                       viewBox="0 0 20 20"
    //                       fill="currentColor"
    //                     >
    //                       <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"></path>
    //                     </svg>
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           )
    //         )
    //       ) : (
    //         <p>Cargando proyectos...</p>
    //       )}
    //     </div>
    //   </div>
    // </section>
    <section id="proyectos">
      <div className="h-screen flex items-center justify-center">
        <div className={styles.card}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z"></path>
          </svg>
          <div className={styles.card__content}>
            <p className={styles.card__title}>Card Title</p>
            <p className={styles.card__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
