import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss'; // Asegúrate de que la ruta es correcta
import App from './App';
import reportWebVitals from './reportWebVitals'; // Asegúrate de importar reportWebVitals
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(); // Asegúrate de que esta línea esté presente
