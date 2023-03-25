//2 - Invocamos a MySQL y realizamos la conexion
const mysql = require("mysql");
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "finanzas",
});

conexion.connect((error) => {
  if (error) {
    console.error("El error de conexión es: " + error);
    return;
  }
  console.log("¡Conectado a la Base de Datos!");
});

module.exports = conexion;
