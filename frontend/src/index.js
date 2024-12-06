// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importing custom CSS styles
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import App from './App'; // Importing the root App component
import {BrowserRouter} from 'react-router-dom'; // Importing Router for routing

// Rendering the App component inside the root div of index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
    //document.getElementById('root') // This is where the app will be rendered in the DOM
);
