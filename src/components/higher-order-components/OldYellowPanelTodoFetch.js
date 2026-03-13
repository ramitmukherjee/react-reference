import { useEffect, useState } from "react";

const YellowPanelTodoFetch = (props) => {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const [data, setData] = useState("");

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json.title))
            .catch((e) => console.error(e));
    }, []);

    return (
        <pre style={{backgroundColor: "lightyellow"}}>
            {data.length > 0 ? data : 'Fetching yellow data...'}
        </pre>
    );
};

export default YellowPanelTodoFetch;