import type { PortfolioData } from "../../App";

interface SkillsProps {
  data: PortfolioData;
}
const Skills: React.FC<SkillsProps> = ({ data }) => {
  const skillGroups = data?.skills ?? [];

  return (
    <section id="habilidades">
      
      <h1 className="text-4xl font-semibold mb-6 text-left">
        Habilidades Técnicas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 animate-fadeInOnce">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className="border border-black dark:border-white rounded-lg p-6 shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 text-left">
              {group.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-left">
              {group.technologies.map((technology, index) => (
                <span key={index} className="text-base">
                  • {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
