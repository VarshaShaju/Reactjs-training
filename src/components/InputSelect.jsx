const InputSelect = ({
    label,
    onChange,
    defaultvalue,
    name,
    id,
    options,
}) => {
    return (
        <div className="input" >
            <label>{label}</label><br/>
            <select name={label} value={defaultvalue} id={id}  onChange={(event)  => onChange(event.target.value)}>
                {
                    options.map((item)=>(
                      <option key={item.key}>{item.label}</option>
                    ))
                }
            </select><br/>
        </div>
    );
};
export default InputSelect;