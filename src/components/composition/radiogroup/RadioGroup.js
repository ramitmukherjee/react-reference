
import { Children, cloneElement } from "react";
const RadioGroup = function(props) {
    const {selected, onChange, children} = props;
    
    return (
        <>
            {Children.map(children, child => {
                return cloneElement(child, {
                    ...child.props,
                    checked: child.props.value === selected,
                    onChange: onChange
                });
            })}
        </>
    )
}

export default RadioGroup;