import WithFetch from "./WithFetch";
import { useTheme } from '../theme/ThemeContext';

const RedPanel = (props) => {
    const { theme } = useTheme();
    const data = props.data;
    const coordinates = props.coordinates;
    return (
        <pre style={{backgroundColor: theme === 'dark' ? 'firebrick' : 'mistyrose'}}>
            RedPanel: "{data.length > 0 ? data : 'Fetching red data...'}" [{coordinates.x}, {coordinates.y}]
        </pre>
    );
}

const RedPanelWithFetch = WithFetch(RedPanel, "https://jsonplaceholder.typicode.com/todos/2");

export default RedPanelWithFetch;