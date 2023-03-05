import "./Button.css";

const Button = (props) => {
    return (
        <button className="button">
            {/* The property "children" gets the children elements inside the component when he is called */}
            {props.children}
        </button>
    )
};

export default Button;