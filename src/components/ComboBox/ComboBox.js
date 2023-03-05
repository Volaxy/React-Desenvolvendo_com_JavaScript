import "./ComboBox.css";

const ComboBox = (props) => {
    console.log(props.itens);

    return (
        <div>
            <label className="label">Team</label>
            <select className="combobox" required={props.required}>
                {/* When creating a select, the React need a key to identify the element, to refresh the component when the key changing */}
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ComboBox;