import "./ComboBox.css";

const ComboBox = (props) => {
    return (
        <div>
            <label className="label">Team</label>
            {/* Calls the "onChanged" function passed as a parameter to be executed, and passes the input value defining the state value variable */}
            <select className="combobox" required={props.required} onChange={event => props.onChanged(event.target.value)}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ComboBox;