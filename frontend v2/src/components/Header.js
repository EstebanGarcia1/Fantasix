import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header className="container mx-auto py-4">
            <nav className="flex space-x-4">
                <Link to="/" className="text-blue-500">Home</Link>
                <Link to="/Draft" className="text-blue-500">Draft</Link>
                <Link to="/Roster" className="text-blue-500">Roster</Link>
                <Link to="/clasificacion" className="text-blue-500">Clasificación</Link>
                <Link to="/Reglas" className="text-blue-500">Reglas</Link>
                <Link to="/Picks" className="text-blue-500">Picks</Link>
                <Link to="/AddPicks" className="text-blue-500">Añadir Pick</Link>
            </nav>
        </header>
    );
};

export default Header; 
