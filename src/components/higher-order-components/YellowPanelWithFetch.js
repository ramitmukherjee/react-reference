import WithFetch from "./WithFetch";
import { useTheme } from '../theme/ThemeContext';

const YellowPanelTodoFetch = (props) => {
    const { theme } = useTheme();
    return (
        <pre style={{backgroundColor: theme === 'dark' ? 'saddlebrown' : 'cornsilk'}}>
            {props.data.length > 0 ? props.data : 'Fetching yellow data...'}
        </pre>
    );
};

const YellowPanelWithFetch = WithFetch(YellowPanelTodoFetch, "https://jsonplaceholder.typicode.com/todos/1");

export default YellowPanelWithFetch;