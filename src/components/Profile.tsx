import type { PortfolioData } from "../App";

function Profile({ data }: { data: PortfolioData | null }) {
  if (!data) {
    return <div>Cargando perfil...</div>;
  }

  const profile = Array.isArray(data.profile) ? data.profile[0] : data.profile;
  const fullName = `${profile.name} ${profile.lastName}`;
  const animateButton = () => {
    const cvButton = document.getElementById("cv");
    if (cvButton) {
      cvButton.classList.add("animate-once");
    }
  };

  return (
    <section id="home">
      <div className="flex items-center gap-4 h-screen w-full">
        <div className="w-full">
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
            <button
              type="button"
              id="cv"
              onClick={animateButton}
              className="inline-flex text-gray-900! bg-white! border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:text-white! dark:border-gray-600 dark:hover:bg-gray-700! dark:hover:border-gray-600"
              aria-label="Descargar CV"
            >
              Descargar CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full justify-end flex">
          <img
            className="rounded-lg"
            src={profile.avatar}
            alt="foto de perfil"
            height="80"
            width="50%"
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
