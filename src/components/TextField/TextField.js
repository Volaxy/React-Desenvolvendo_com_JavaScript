import "./TextField.css";

const TextField = () => {
    return (
        <div className="text-field">
            <label className="text-field__label">Name</label>
            <input className="text-field__input" placeholder="Type your name" />
        </div>
    );
};

export default TextField;