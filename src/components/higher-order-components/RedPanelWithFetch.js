import WithFetch from "./WithFetch";
import { useTheme } from '../theme/ThemeContext';

const RedPanelTodoFetch = (props) => {
    const { theme } = useTheme();
    const data = props.data;
    return (
        <pre style={{backgroundColor: theme === 'dark' ? 'firebrick' : 'mistyrose'}}>
            {data.length > 0 ? data : 'Fetching red data...'}
        </pre>
    );
}

const RedPanelWithFetch = WithFetch(RedPanelTodoFetch, "https://jsonplaceholder.typicode.com/todos/2");

export default RedPanelWithFetch;