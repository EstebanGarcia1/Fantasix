// src/components/Rules.js
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import './../styles/rules.scss';

const RulesScreen = () => {
  const rulesSections = [
    {
      title: "Selección de Equipos",
      content: `
        La selección de equipos será realizada en un evento en línea el día 4 de Noviembre en el canal de Vetelcito01 a las 21:00 hora española. Se hará un sorteo para decidir el orden de los picks.
      `
    },
    {
      title: "Orden de los Picks",
      content: `
        Los picks serán escogidos como en la anterior edición siendo un formato invertido.
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
      `
    },
    {
      title: "Puntuación de Jugadores",
      content: `
        Los jugadores acumularán puntos en función de su desempeño en cada partida. Se otorgarán puntos según los siguientes criterios:

        - Mapas ganados: +3 puntos
        - Mapas perdidos: -1 punto
        - Rondas ganadas: +1.5 puntos
        - Rondas perdidas: -0.5 puntos
        - Kills: +1.8 puntos
        - Muertes: -1 punto
        - Acción de bomba: +4 puntos
        - 1 vs X: +8 puntos
        - Entry Kill: +0.75 puntos
        - Open Death: -0.4 puntos
        - KOST (x/100): *20 puntos
        - Supervivencia %: *0.5 puntos
        - MVP de la partida: +5 puntos
        - MVP de la jornada: +15 puntos
      `
    },
    {
      title: "Formato Suizo",
      content: `
        Para igualar las cosas en el formato suizo clasificar en una posición u otra será compensado con puntos dependiendo del resultado.
        
        - 2-0: +100 puntos
        - 2-1: +50 puntos

        El resto de resultados no suman ni restan puntos.
      `
    },
    {
      title: "Actualización de la Clasificación y Puntuación de los Jugadores",
      content: `
        Las actualizaciones de la clasificación intentaremos publicarlas en tiempo real en el Discord de ES_Siege, donde también publicaremos una tabla de Excel idéntica para que cada grupo de amigos pueda intentar replicar el Fantasix.

        También se subirán los resultados con los grafismos adecuados a la cuenta de Twitter de https://twitter.com/ES_Siege.
      `
    },
    {
      title: "Reglas de Uso",
      content: `
        - No se pueden pickear jugadores ya elegidos.
        - No habrá mercado de fichajes, por lo que el equipo que te hagas será el que te acompañará durante todo el torneo.
        - Es obligatorio el pickeo de al menos 1 Support en cada equipo.
      `
    }
  ];

  return (
    <div className="container rules-screen">
      <h1 className="text-center">Reglas del Fantasix</h1>
      <div className="rules-list">
        {rulesSections.map((section, index) => (
          <Card key={index} className="rule-card">
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{section.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RulesScreen;
