// routes/participants.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// Obtener la lista de participantes
router.get("/", (req, res) => {
    const query = 'SELECT id, name FROM participants;'; // Ajusta según tu tabla
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al obtener participantes:', err);
            return res.status(500).json({ error: 'Error al obtener participantes' });
        }
        res.json(results);
    });
});

module.exports = router;
