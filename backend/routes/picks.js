// routes/picks.js
const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/save-pick", async (req, res) => {
    const { participantId, playerId, pickOrder } = req.body;

    if (!participantId || !playerId || !pickOrder) {
        return res.status(400).json({ error: "Datos incompletos para guardar el pick" });
    }

    try {
        const [result] = await db.promise().query(
            `INSERT INTO picks (participant_id, player_id, pick_order) 
             VALUES (?, ?, ?)
             ON DUPLICATE KEY UPDATE player_id = VALUES(player_id)`,
            [participantId, playerId, pickOrder]
        );

        res.json({ success: true, message: "Pick guardado exitosamente" });
    } catch (error) {
        console.error("Error guardando el pick:", error);
        res.status(500).json({ error: "Hubo un problema guardando el pick" });
    }
});

module.exports = router;
