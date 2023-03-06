import "./Collaborator.css";

const Collaborator = ({backgroundColor, name, office, image}) => {
    return (
        <div className="collaborator">
            <div className="collaborator__header" style={{backgroundColor: backgroundColor}}>
                <img className="collaborator__header__image" src={image} alt={name} />
            </div>

            <div className="collaborator__footer">
                <h4 className="collaborator__footer__h4">{name}</h4>
                <h5 className="collaborator__footer__h5">{office}</h5>
            </div>
        </div>
    )
}

export default Collaborator;