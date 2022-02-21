import { NavLink, useLocation } from "remix";
import { FaGithub } from "react-icons/fa";

import RemixLogo from "~/components/logo";

const classNameActiveRoute = (currentRoute: boolean): string => {
  if (!currentRoute) {
    return "text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded";
  }

  return "text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded";
};

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <div className="py-5 bg-white rounded shadow-lg px-7">
      <nav className="flex justify-between">
        <div className="flex items-center pr-6 space-x-3 lg:pr-16">
          <RemixLogo />
        </div>

        <ul className="flex-auto space-x-2 md:flex">
          <NavLink
            to="/characters"
            className={classNameActiveRoute(pathname === "/characters")}
          >
            Characters
          </NavLink>
          <NavLink
            to="/spells"
            className={classNameActiveRoute(pathname === "/spells")}
          >
            Spells
          </NavLink>
          <NavLink
            to="/books"
            className={classNameActiveRoute(pathname === "/books")}
          >
            Books
          </NavLink>
        </ul>
        <div className="flex items-center justify-center pl-2 space-x-5 ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/m7he4rt/remix-harry-potter"
          >
            <FaGithub
              size={24}
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
