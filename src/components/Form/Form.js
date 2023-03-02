import "./Form.css";

import TextField from "../TextField/TextField.js";

const Form = () => {
    return (
        <section className="collaborator">
            <form className="collaborator__form">
                <h2>Fill in the data to create the collaborator's card</h2>

                {/* The properties with PROPERTY_NAME="VALUE" is passed into a object in the component class */}
                <TextField label="Name" placeholder="Type your name" />
                <TextField label="Office" placeholder="Type your office" />
                <TextField label="Image" placeholder="Type your Image address" />
            </form>
        </section>
    )
};

export default Form;