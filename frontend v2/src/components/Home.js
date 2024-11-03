// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import './../styles/global.scss';

export default function Home() {
  return (
    <div className="container py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Bienvenido a Fantasix Draft</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Clasificación */}
        <Card className="preview-card">
          <CardHeader className="card-header">
            <CardTitle className="text-2xl">Clasificación Actual</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Consulta la clasificación actual de los participantes, con sus respectivos puntos y posición en la tabla.</p>
            <Link to="/clasificacion">
              <button className="btn-primary mt-4">Ver Clasificación</button>
            </Link>
          </CardContent>
        </Card>

        {/* Draft */}
        <Card className="preview-card">
          <CardHeader className="card-header">
            <CardTitle className="text-2xl">Pantalla de Draft</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Gestiona el draft y selecciona a los mejores jugadores para tu equipo de fantasía.</p>
            <Link to="/draft">
              <button className="btn-primary mt-4">Ir a Draft</button>
            </Link>
          </CardContent>
        </Card>

        {/* Roster */}
        <Card className="preview-card">
          <CardHeader className="card-header">
            <CardTitle className="text-2xl">Roster de Equipos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">Consulta el roster de cada participante y revisa a los jugadores que han sido seleccionados.</p>
            <Link to="/roster">
              <button className="btn-primary mt-4">Ver Roster</button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
