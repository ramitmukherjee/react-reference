const RadioOption = ({value, label, checked, onChange}) => {

    return (
        <label>
            <input type="radio" value={value} checked={checked} onChange={onChange} /> {label}
        </label>
    );

}

export default RadioOption;