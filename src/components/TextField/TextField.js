import "./TextField.css";

const TextField = (props) => {
    // CHANGE THE VALUE BY THE COMPONENT ITSELF
    // Every function wich begin with "use" is a hook
    // const [value, setValue] = useState("Volaxy");

    // const onType = event => {
    //     setValue(event.target.value);
    //     console.log(value);
    // };

    const onType = event => {
        props.onChanged(event.target.value);
    };

    return (
        <div className="text-field">
            <label className="text-field__label">{props.label}</label>
            <input className="text-field__input" placeholder={props.placeholder} value={props.value} required={props.required} onChange={onType} />
        </div>
    );
};

export default TextField;