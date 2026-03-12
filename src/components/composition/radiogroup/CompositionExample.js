import { useState } from "react";
import RadioGroup from "./RadioGroup";
import RadioOption from "./RadioOption";

const CompositionExample = () => {

    const [selectedValue, setSelectedValue] = useState("test1");

    const handleOnChange = (e) => {
        setSelectedValue(e.target.value);
    }

    return (
        <>
            <h1>Radio Group</h1>
            <RadioGroup selected={selectedValue} onChange={handleOnChange}>
                <RadioOption value={"test1"} label={"test1"} />
                <RadioOption value={"test2"} label={"test2"} />
                <RadioOption value={"test3"} label={"test3"} />
            </RadioGroup>
        </>
    );
}

export default CompositionExample;