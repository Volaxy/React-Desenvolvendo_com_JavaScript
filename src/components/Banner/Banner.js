import "./Banner.css";

function Banner() {
    // This is the "JSX" syntax
    return (
        // The "className" is the property for the "class" in HTML, "className" is used because the "class" is a reserved word
        <header className="banner">
            <img className="banner__image" src="/images/banner.png" alt="Pessoas reunidas conversando e formando um círculo" />
        </header>
    );
}

export default Banner;