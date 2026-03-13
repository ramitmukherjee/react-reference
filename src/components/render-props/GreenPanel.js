import { useTheme } from "../theme/ThemeContext";
import FetchRenderProp from "./FetchRenderProp";

const GreenPanel = (props) => {
    const {theme} = useTheme();
    const url = "https://jsonplaceholder.typicode.com/todos/3";
    
    const renderGreenPanel = (data) => {
        return (
            <pre style={{backgroundColor: theme === 'dark' ? 'darkgreen': 'lightgreen'}}>
                GreenPanel: "{data}"
            </pre>
        );
    };
    return <FetchRenderProp url={url} render={renderGreenPanel} />;
};

export default GreenPanel;