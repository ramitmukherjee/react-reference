import { useState } from "react";

const FetchRenderProp = (props) => {
    const {url, render} = props;
    const [data, setData] = useState("");

    fetch(url)
        .then(res => res.json())
        .then(json => setData(json.title))
        .catch(e => console.error(e));

    return render(data);
}

export default FetchRenderProp;