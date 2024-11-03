// app.js
require('dotenv').config();

const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

// Inicializar la aplicación Express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Configuración de conexión a MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_NAME || "fantasy_league"
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conectado a la base de datos MySQL");
});

// Ruta de bienvenida
app.get("/", (req, res) => {
    res.send("¡Bienvenido al backend de Fantasy Draft!");
});

// Endpoint para obtener equipos
app.get('/api/teams', (req, res) => {
    const query = 'SELECT * FROM teams';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener equipos:', err);
            return res.status(500).json({ error: 'Error al obtener equipos' });
        }
        res.json(results);
    });
});

// Endpoint para obtener jugadores
app.get('/api/players', (req, res) => {
    const query = 'SELECT * FROM players';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener jugadores:', err);
            return res.status(500).json({ error: 'Error al obtener jugadores' });
        }
        res.json(results);
    });
});

// Endpoint para obtener participantes
app.get('/api/participants', (req, res) => {
    const query = 'SELECT * FROM participants';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener participantes:', err);
            return res.status(500).json({ error: 'Error al obtener participantes' });
        }
        res.json(results);
    });
});

// Endpoint para obtener todos los picks
app.get('/api/picks', (req, res) => {
    const query = 'SELECT * FROM picks';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener picks:', err);
            return res.status(500).json({ error: 'Error al obtener picks' });
        }
        res.json(results);
    });
});

// Endpoint para realizar un pick
app.post('/api/picks', (req, res) => {
    const { participantId, playerId } = req.body;

    if (!Number.isInteger(participantId) || !Number.isInteger(playerId)) {
        return res.status(400).json({ error: 'Datos inválidos: participantId y playerId deben ser enteros' });
    }

    // Verificar si el participante ya tiene 5 jugadores
    const checkParticipantQuery = `SELECT COUNT(*) AS pickCount FROM picks WHERE participant_id = ?`;
    db.query(checkParticipantQuery, [participantId], (err, results) => {
        if (err) {
            console.error('Error al verificar picks del participante:', err);
            return res.status(500).json({ error: 'Error al verificar picks del participante' });
        }

        const pickCount = results[0].pickCount;

        if (pickCount >= 5) {
            return res.status(400).json({ error: 'El participante ya tiene el número máximo de picks (5)' });
        }

        // Verificar si el jugador ya ha sido seleccionado
        const checkPlayerQuery = `SELECT * FROM picks WHERE player_id = ?`;
        db.query(checkPlayerQuery, [playerId], (err, results) => {
            if (err) {
                console.error('Error al verificar si el jugador ya fue seleccionado:', err);
                return res.status(500).json({ error: 'Error al verificar jugador' });
            }

            if (results.length > 0) {
                return res.status(400).json({ error: 'El jugador ya ha sido seleccionado por otro participante' });
            }

            // Insertar el pick con `pick_order` calculado
            const pickOrder = pickCount + 1; // pick_order es el número de picks existentes + 1
            const insertPickQuery = 'INSERT INTO picks (participant_id, player_id, pick_order) VALUES (?, ?, ?)';
            db.query(insertPickQuery, [participantId, playerId, pickOrder], (err) => {
                if (err) {
                    console.error('Error al hacer pick:', err);
                    return res.status(500).json({ error: 'Error al hacer pick' });
                }
                res.json({ message: 'Pick realizado con éxito' });
            });
        });
    });
});

// Endpoint para liberar un pick
app.delete('/api/picks/:participantId/:playerId', (req, res) => {
    const { participantId, playerId } = req.params;

    const deletePickQuery = 'DELETE FROM picks WHERE participant_id = ? AND player_id = ?';
    db.query(deletePickQuery, [participantId, playerId], (err) => {
        if (err) {
            console.error('Error al liberar pick:', err);
            return res.status(500).json({ error: 'Error al liberar pick' });
        }
        res.json({ message: 'Pick liberado con éxito' });
    });
});

// Endpoint para resetear todos los picks (ADMIN)
app.delete('/api/picks/reset', (req, res) => {
    const query = 'DELETE FROM picks';
    db.query(query, (err) => {
        if (err) {
            console.error('Error al resetear picks:', err);
            return res.status(500).json({ error: 'Error al resetear picks' });
        }
        res.json({ message: 'Picks reseteados con éxito' });
    });
});

// Middleware para manejo de errores genérico
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo salió mal, por favor intenta de nuevo' });
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
