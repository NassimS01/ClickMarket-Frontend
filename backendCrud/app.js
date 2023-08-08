"use strict";

//Cargar modulos de node para crear servidor
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// ejecutar express (https)
const app = express();

// cargar ficheros rutas
const products_routes = require("./routes/productsRouter");

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// añadir prefijos para rutas / cargar rutas
app.use("/api", products_routes);

// exportar el modulo(fichero actual)
module.exports = app;
