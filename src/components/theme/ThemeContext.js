
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = function({children}) {

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
        console.log("togglingTheme to: " + theme);
    }

    return (
        <ThemeContext.Provider value={ { theme, toggleTheme } }>
            { children }
        </ThemeContext.Provider>
    );

}
















