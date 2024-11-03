// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; 
import Home from './components/Home';
import DraftScreen from './components/Draft';
import Roster from './components/Roster';
import Clasificacion from './components/Clasificacion';
import Reglas from './components/Reglas';
import { FantasyProvider } from './context/FantasyContext'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './styles/global.scss';

function App() {
  return (
    <FantasyProvider>
      <Router>
        {/* Renderizamos el Header en la parte superior para mantenerlo siempre visible */}
        <Header />

        <div className="container">
          {/* Definimos las rutas de navegación */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/draft" element={<DraftScreen />} />
            <Route path="/roster" element={<Roster />} />
            <Route path="/clasificacion" element={<Clasificacion />} />
            <Route path="/reglas" element={<Reglas />} />
          </Routes>
        </div>
      </Router>
    </FantasyProvider>
  );
}

export default App;
