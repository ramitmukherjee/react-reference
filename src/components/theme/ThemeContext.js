
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = function({children}) {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    }

    return (
        <ThemeContext.Provider value={ { theme, toggleTheme } }>
            { children }
        </ThemeContext.Provider>
    );

}
















