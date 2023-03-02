import "./TextField.css";

// The value between the "()" is the values passed by attributes in the component tag
const TextField = (props) => {
    // const modifiedPlaceholder = `${props.placeholder}...`;

    return (
        <div className="text-field">
            {/* The "props." access the object property */}
            <label className="text-field__label">{props.label}</label>
            <input className="text-field__input" placeholder={props.placeholder} />
            {/* <input className="text-field__input" placeholder={modifiedPlaceholder} /> This is a interpolation of string */}
        </div>
    );
};

export default TextField;