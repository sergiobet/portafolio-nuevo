import type { PortfolioData } from "../../App";
import DownloadCurriculum from "../DownloadCurriculum/DownloadCurriculum";

const Profile = ({ data }: { data: PortfolioData | null }) => {
  if (!data) {
    return <div>Cargando perfil...</div>;
  }
  
  const profile = Array.isArray(data.profile) ? data.profile[0] : data.profile;
  const fullName = `${profile.name} ${profile.lastName}`;

  return (
    <section id="home">
      <div className="items-center gap-4 h-dvh w-full grid grid-cols-1 md:grid-cols-2">
        <div className="w-full order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-semibold text-left my-4">
            {fullName}
          </h1>
          <h2 className="text-lg md:text-2xl my-2 md:my-6 text-left">
            {profile.experience}
          </h2>
          <p className="text-gray-600 text-base md:text-lg my-2 md:my-4 text-left">
            {profile.description}
          </p>
          <div className="text-left">
            <DownloadCurriculum/>
            <a className="inline-flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:text-white! dark:border-gray-600 dark:hover:bg-gray-700! dark:hover:border-gray-600 cursor-pointer dark:text-white w-full mx-auto justify-center md:justify-start md:w-auto animate-pingOnce" href="#contacto">Contáctame</a>
          </div>
        </div>
        <div className="w-full order-1 md:order-2 md:flex md:justify-end hidden">
          <img
            className="rounded-lg w-4/12 mx-auto md:w-xs md:mx-0 animate-fadeInOnce"
            width="auto"
            height="auto"
            src={profile.avatar}
            alt="foto de perfil"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
