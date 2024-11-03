const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',          // Cambia esto si tu base de datos está en otro lugar
  user: 'tu_usuario',        // Cambia 'tu_usuario' por tu nombre de usuario de MySQL
  password: 'tu_contraseña', // Cambia 'tu_contraseña' por tu contraseña de MySQL
  database: 'jugadoresfantasix' // Nombre de tu base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conectado como ID ' + connection.threadId);
});

// Exportar la conexión para usarla en otros archivos
module.exports = connection;
