import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';

function App() {
    const [collaborators, setCollaborators] = useState([]);

    return (
        <div className="App">
            <Banner />

            {/* Increment the collaborators with the new collaborator on submit the form */}
            <Form onRegisterCollaborator={collaborator => setCollaborators([...collaborators, collaborator])} />
        </div>
    );
}

export default App;
