import WithFetch from "./WithFetch";
import { useTheme } from '../theme/ThemeContext';

const YellowPanel = (props) => {
    const { theme } = useTheme();
    return (
        <div>
            
            <pre style={{backgroundColor: theme === 'dark' ? 'saddlebrown' : 'cornsilk'}}>
                YellowPanel: "{props.data.length > 0 ? props.data : 'Fetching yellow data...'}"
            </pre>
        </div>
    );
};

const YellowPanelWithFetch = WithFetch(YellowPanel, "https://jsonplaceholder.typicode.com/todos/1");

export default YellowPanelWithFetch;