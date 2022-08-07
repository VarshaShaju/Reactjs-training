const InputSelect = ({
    label,
    options
}) => {
    return (
        <div className="input-field">
            <label>{label}</label>
            <select name={label}>
                {options.map((item) =>{
                    <option key={item.key}>{item.label}</option>
                })}
            </select>
        </div>
    );
};

export default InputSelect;