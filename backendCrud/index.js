"use strict";

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const port = 3900;

dotenv.config();
mongoose.Promise = globalThis.Promise;
// conexion a la base de datos
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexion Exitosa DataBase");
  } catch (error) {
    throw new Error("Error Connection DataBase");
  }
};

dbConnection();

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
