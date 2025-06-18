import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

//opciones para el menú de navegación
const navigation = [
  { name: "Inicio", href: "#home" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Sobre mí", href: "#sobremi" },
  { name: "Contacto", href: "#contacto" },
];

const classNames = (...classes: (string | undefined | false | null)[]) => {
  return classes.filter(Boolean).join(" ");
};

const activeMenuItem = () => {
  const items = Array.from(document.querySelectorAll("nav a"));
  const handleClick = (el: Event) => {
    const target = el.target as HTMLElement | null;

    items.forEach((item) => item.classList.remove("active"));
    if (target) {
      target.classList.add("active");
    }
  };

  items.forEach((item) => {
    item.addEventListener("click", handleClick);
  });

  // Cleanup function to remove listeners
  return () => {
    items.forEach((item) => {
      item.removeEventListener("click", handleClick);
    });
  };
};

function MenuComponent() {
  const [active, setActive] = useState(navigation[0].href);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const cleanup = activeMenuItem(); // Llamamos a la función

    return () => {
      cleanup?.(); // Ejecutamos la limpieza cuando el componente se desmonta
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Disclosure
      as="nav"
      className=" top-0 z-50 w-full fixed bg-opacity-100 left-0 bg-white dark:bg-[#121212]"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-around sm:items-stretch md:justify-between">
            <div className="flex shrink-0 items-center text-2xl relative">
              {darkMode ?
                    <img
                src="./../../public/logos/logo-white.webp"
                alt="Logo"
                height="30"
                width="30"
              />
              : 
                <img
                src="./../../public/logos/logo-dark.webp"
                alt="Logo"
                height="30"
                width="30"
              />  
              }
              
            
            </div>
            <div className="hidden sm:ml-6 sm:block relative">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActive(item.href)}
                    className={classNames(
                      active === item.href
                        ? "text-gray"
                        : "text-gray-500 hover:text-black dark:hover:text-white",
                      "rounded-md px-3 py-2 text-md font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 cursor-pointer"
              aria-label="cambiar a tema claro/oscuro"
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6 text-gray-500" />
              ) : (
                <MoonIcon className="h-6 w-6 text-gray-500" />
              )}
            </button>

            {/* Profile dropdown */}
            {/* <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu> */}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="text-gray-400 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default MenuComponent;
