
import { useTheme } from "./ThemeContext";

const ThemeSwitch = () => {
    
    const { toggleTheme } = useTheme();

    return (
        <label>
          🌗 <input onChange={toggleTheme} type="checkbox"/> Dark Mode
        </label>
    );
};

export default ThemeSwitch;