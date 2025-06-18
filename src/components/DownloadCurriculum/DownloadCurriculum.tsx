import { ArrowRightIcon } from "@heroicons/react/24/outline";

function DownloadCurriculum() {
  const handleDownload = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const link = document.createElement("a");
    link.href = "./cv/Sergio-Betancourt-CV.pdf"; // Ruta al archivo PDF
    link.download = "Sergio-Betancourt-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="inline-flex text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:text-white! dark:border-gray-600 dark:hover:bg-gray-700! dark:hover:border-gray-600 cursor-pointer dark:text-white w-full mx-auto justify-center md:justify-start md:w-auto animate-pingOnce"
      aria-label="Descargar CV"
    >
      Descargar CV
      <ArrowRightIcon className="h-5 w-4 ml-1" />
    </button>
  );
}

export default DownloadCurriculum;
