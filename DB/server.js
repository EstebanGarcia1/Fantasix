const express = require('express');
const cors = require('cors'); // Importar cors
const bodyParser = require('body-parser');
const participantsRoutes = require('./routes/participants');
const picksRoutes = require('./routes/picks');

const app = express();

// Middleware de CORS para permitir solicitudes desde el frontend
app.use(cors({
  origin: 'http://localhost:3001' // Ajusta el puerto según el puerto del frontend
}));

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.json());

// Tus otras rutas y middlewares aquí
app.use('/api/participants', participantsRoutes);
app.use('/api/picks', picksRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
