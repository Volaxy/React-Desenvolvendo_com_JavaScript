import "./Form.css";

import TextField from "../TextField/TextField.js";
import ComboBox from "../ComboBox/ComboBox";
import Button from "../Button/Button";

const itens = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão"
];

const Form = () => {
    return (
        <section className="collaborator">
            <form className="collaborator__form" onSubmit={onSave}>
                <h2>Fill in the data to create the collaborator's card</h2>

                <TextField label="Name" placeholder="Type your name" required={true} />
                <TextField label="Office" placeholder="Type your office" required={true} />
                <TextField label="Image" placeholder="Type your Image address" />
                <ComboBox itens={itens} required={true} />

                <Button>Create Card</Button>
            </form>
        </section>
    )
};

function onSave(event) {
    event.preventDefault();
}

export default Form;