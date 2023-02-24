import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Creates the main component of the app, passing as a parameter the element that will be the main element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Generates a friendly error message to the developer
    <React.StrictMode>
        <App />
    </React.StrictMode>
);