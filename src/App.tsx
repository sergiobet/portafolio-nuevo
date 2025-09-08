import "./App.css";
import Projects from "./components/Projects/Projects";
import Profile from "./components/Profile/Profile";
import MenuComponent from "./components/MenuComponent/MenuComponent";
import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  technologies: string[];
}

export interface ProfileData {
  name: string;
  lastName: string;
  email: string;
  avatar: string;
  experience: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  technologies: string[];
}

export interface PortfolioData {
  projects: Project[];
  profile: ProfileData[];
  skills: SkillGroup[];
}

function App() {

  const [data, setData] = useState<PortfolioData | null>(null);
  const [showContact, setShowContact] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

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

  // Este efecto espera a que data esté lista y luego muestra ContactForm
  useEffect(() => {
    if (data) {
      setShowContact(true);
      setShowFooter(true);
    }
  }, [data]);

  return (
    <>
      <MenuComponent></MenuComponent>

      <main>
        {data && <Profile data={data} />}
        <br />
        {data && <Skills data={data} />}
        <br /><br />
        {data && <Projects data={data} />}
        {showContact && <ContactForm />}
      </main>
      <footer>
        {showFooter &&<Footer />}
      </footer>
    </>
  );
}

export default App;
