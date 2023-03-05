import "./TextField.css";

const TextField = (props) => {
    return (
        <div className="text-field">
            <label className="text-field__label">{props.label}</label>
            <input className="text-field__input" placeholder={props.placeholder} required={props.required} />
        </div>
    );
};

export default TextField;