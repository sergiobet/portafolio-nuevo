import "./App.css";
import Projects from "./components/Projects/Projects";
import Profile from "./components/Profile/Profile";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import SocialIcons from "./components/SocialIcons/SocialIcons";
import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
}

export interface ProfileData {
  name: string;
  lastName: string;
  email: string;
  avatar: string;
  experience: string;
  description: string;
}

export interface PortfolioData {
  projects: Project[];
  profile: ProfileData[];
}

function App() {

  const [data, setData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/data.json");
        if (!response.ok) throw new Error("Error al cargar los datos");
        const jsonData: PortfolioData = await response.json();
        setData(jsonData);
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

  }, []);

  return (
    <> 
    <MenuComponent></MenuComponent>
    
      <main>
        <SocialIcons></SocialIcons>
        <Profile data={data}></Profile>
        <br></br>
        <Projects data={data}></Projects>
        <ContactForm></ContactForm>
      </main>

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
