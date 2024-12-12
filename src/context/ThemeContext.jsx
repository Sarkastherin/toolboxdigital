import { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({children}) => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const [theme, setTheme] = useState(prefersDarkScheme.matches ? "dark" : "light")
    const toggleTheme = () => {
        setTheme(theme === "dark"? "light" : "dark")
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
