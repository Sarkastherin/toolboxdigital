import { MenuBar } from "../assets/icons/MenuBar";
import { MoonIcon } from "../assets/icons/Moon";
import { SunIcon } from "../assets/icons/Sun";
import { NavLink } from "react-router-dom";
export const Header = ({theme, toggleTheme}) => {
  return (
    
    <header className={`bg-slate-700 text-indigo-200 ${theme === 'dark' ? 'dark:bg-slate-800':''}`}>
      <div className="mx-auto h-16 flex items-center gap-6 justify-between max-w-7xl px-6">
        <div className="flex gap-4 items-center">
          <button
            type="button"
            className="rounded-full border border-indigo-400 ms-5 p-2 text-indigo-400 hover:bg-indigo-800/30"
            onClick={toggleTheme}
          >
            {theme === 'dark'? <SunIcon /> : <MoonIcon />}
          </button>
          <a href="#">HomeLogo</a>
        </div>

        <div className="flex items-center font-semibold">
          <nav>
            <ul className="flex gap-5">
              <li>
                <NavLink to="/" className={'hover:text-indigo-300/90'}>Inicio</NavLink>
              </li>
              <li>
              <NavLink to="/blog" className={'hover:text-indigo-300/90'}>Blog</NavLink>
              </li>
              
            </ul>
          </nav>
          <div>
            <button
              type="button"
              className="md:hidden rounded p-2 ms-4 border border-indigo-400 ms-5 p-2 text-indigo-400 hover:bg-indigo-800/30"
            >
              <MenuBar />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
