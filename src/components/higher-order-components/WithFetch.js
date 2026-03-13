import { useState } from "react";

const WithFetch = (WrappedComponent, url) => {
    const WrappedComponentWithFetch = (props) => {
        const [data, setData] = useState("");
        fetch(url)
            .then(response => response.json())
            .then(json => {
                data = setData(json.title);
            })
            .catch((e) => console.error(e));
        return <WrappedComponent data={data} {...props} />;
    }

    return WrappedComponentWithFetch;
};

export default WithFetch;