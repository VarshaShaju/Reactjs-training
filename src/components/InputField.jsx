const InputField = ({
    label,
    onChange,
    value,
    type,
    id,
    placeholder,
    name
}) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} id={id} placeholder={placeholder} name={name} value = {value} onChange={(event) => onChange(event.target.value)} />
        </div>
    )
}

export default InputField;