import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useTheme } from "../context/ThemeContext";

export const Layout = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`min-h-dvh  ${
        theme === "dark"
          ? "dark:bg-gradient-to-t to-slate-800 from-slate-700 dark:text-slate-100"
          : "bg-gradient-to-t to-slate-100 from-indigo-200 text-slate-800"
      } `}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
    </div>
  );
};
