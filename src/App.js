// It is common for component js files to be named "index.js", to omit the duplicated word when importing components
import Banner from './components/Banner/Banner';
import TextField from './components/TextField/TextField';

function App() {
    return (
        <div className="App">
            {/* This import a COMPONENT */}
            <Banner />
            <TextField />
        </div>
    );
}

export default App;
