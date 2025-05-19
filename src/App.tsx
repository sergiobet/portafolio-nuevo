import "./App.css";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<ProjectsData | null>(null);

   interface Project {
    id: number;
    title: string 
    description: string;
    image: string;
    url: string;
    tags: string[];
  }
  interface ProjectsData {
    projects: Project[];
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/data.json");
        if (!response.ok) throw new Error("Error al cargar los datos");
        const jsonData: ProjectsData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Projects data={data}></Projects>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
