// Import de React et ReactDom
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import du fichier de style principal (SASS)
import './index.scss';

// Import du composant principal App
import App from './App';

// Création de la racine React pour attacher l'app au DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans le DOM
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);