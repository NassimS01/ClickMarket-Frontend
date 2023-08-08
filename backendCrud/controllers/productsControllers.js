"use strict";
const validator = require("validator");
const productSchema = require("../models/productSchema");
const { EventEmitter } = require("events");

const eventEmitter = new EventEmitter();

const controllerProduct = {
  // Metodo para enviar al cliente cuando se agrega un nuevo producto
  updateCrud: async (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");

    const handleProductUpdate = (product) => {
      const event = `data: ${JSON.stringify(product)}\n\n`;
      res.write(event);
    };

    // Registra el manejador de eventos para los eventos "newProduct" y "productUpdated"
    eventEmitter.on("newProduct", handleProductUpdate);
    eventEmitter.on("productUpdated", handleProductUpdate);

    // Eliminar el manejador de eventos cuando la conexión se cierra
    req.on("close", () => {
      eventEmitter.off("newProduct", handleProductUpdate);
      eventEmitter.off("productUpdated", handleProductUpdate);
    });
  },

  // Metodo para guardar Productos en la base de datos SAVE
  save: async (req, res) => {
    // Recoger parámetros por post
    const params = req.body;

    // Validar datos
    if (!areParamsValid(params)) {
      return res.status(400).send({
        status: "error",
        message: "Faltan datos por enviar o los datos no son válidos",
      });
    }

    try {
      // Crear el objeto a guardar
      const product = new productSchema();

      // Asignar valores
      product.name = params.name;
      product.price = params.price;
      product.descrip = params.descrip;
      product.fav = params.fav;
      product.category = params.category;
      product.stock = params.stock;
      product.state = params.state;
      product.img = params.img;

      // Guardar el producto en la base de datos
      const productStored = await product.save();

      // Emitir un evento de nuevo producto
      eventEmitter.emit("newProduct", productStored);
      // responde con el producto guardado

      return res.status(201).send({
        status: "success",
        product: productStored,
      });
    } catch (error) {
      return res.status(500).send({
        status: "error",
        message: "Error en el servidor",
      });
    }
    // Función para validar los campos
    function areParamsValid(params) {
      const stringFields = ["name", "descrip", "category", "img"];
      const numberFields = ["price", "stock"];
      const booleanFields = ["fav", "state"];

      for (const field of stringFields) {
        if (
          typeof params[field] !== "string" ||
          validator.isEmpty(params[field])
        ) {
          return false;
        }
      }

      for (const field of numberFields) {
        if (!validator.isNumeric(params[field])) {
          return false;
        }
      }

      for (const field of booleanFields) {
        if (typeof params[field] !== "boolean") {
          return false;
        }
      }

      return true;
    }
  },

  // Metodo para traer todos los productos de la base de datos
  getProducts: async (req, res) => {
    try {
      const products = await productSchema.find({}).sort("-_id").exec();

      if (!products || products.length === 0) {
        return res.status(404).send({
          status: "error",
          message: "No hay productos para mostrar",
        });
      }

      return res.status(200).send({
        status: "success",
        products,
      });
    } catch (error) {
      return res.status(500).send({
        status: "error",
        message: "Error al devolver los productos",
      });
    }
  },
  // Metodo para buscar un solo producto
  getProduct: async (req, res) => {
    // Recoger el id de la url
    const productId = req.params.id;
    // Comprobar que existe
    if (!productId || productId === null) {
      return res.status(404).send({
        status: "error",
        message: "No existe el artículo",
      });
    }
    try {
      // Buscar el producto
      const product = await productSchema.findById(productId);

      if (!product) {
        return res.status(404).send({
          status: "error",
          message: "No existe el artículo",
        });
      }

      return res.status(200).send({
        status: "success",
        product,
      });
    } catch (error) {
      return res.status(500).send({
        status: "error",
        message: "Error al devolver los datos",
      });
    }
  },

  // Metodo para borrar productos de la base de datos
  delete: async (req, res) => {
    try {
      // Recoger el id de la url
      const productId = req.params.id;

      // Find and delete
      const productRemoved = await productSchema.findOneAndDelete({
        _id: productId,
      });

      if (!productRemoved) {
        return res.status(404).send({
          status: "error",
          message: "No se ha borrado el producto, posiblemente no exista!!",
        });
      }

      return res.status(200).send({
        status: "success",
        product: productRemoved,
      });
    } catch (err) {
      return res.status(500).send({
        status: "error",
        message: "Error al borrar!!",
      });
    }
  },
  // Metodo para actualizar/editar productos
  update: async (req, res) => {
    // Recoger el id del producto por la url
    const productId = req.params.id;
    // Recoger los datos que llegan por put
    const params = req.body;

    // Validar datos
    try {
      // Validar campos de tipo String
      const stringFields = ["name", "descrip", "category", "img"];
      for (const field of stringFields) {
        if (
          typeof params[field] !== "string" ||
          validator.isEmpty(params[field])
        ) {
          return res.status(400).send({
            status: "error",
            message: `El campo ${field} es obligatorio y debe ser una cadena no vacia`,
          });
        }
      }
      // Validar campos de tipo numérico
      const numberFields = ["price", "stock"];
      for (const field of numberFields) {
        if (!validator.isNumeric(params[field])) {
          return res.status(400).send({
            status: "error",
            message: `El campo '${field}' debe ser un número válido.`,
          });
        }
      }
      // Validar campos de tipo booleano
      if (
        typeof params.fav !== "boolean" ||
        typeof params.state !== "boolean"
      ) {
        return res.status(400).send({
          status: "error",
          message:
            "Los campos 'fav' y 'state' deben ser de tipo booleano (true o false).",
        });
      }
      // Find and update
      const productUpdate = await productSchema.findOneAndUpdate(
        { _id: productId },
        params,
        { new: true }
      );

      if (!productUpdate) {
        return res.status(404).send({
          status: "error",
          message: "No existe el producto",
        });
      }

      // Emitir un evento de producto actualizado
      eventEmitter.emit("productUpdated", productUpdate);

      return res.status(200).send({
        status: "success",
        product: productUpdate,
      });
    } catch (err) {
      return res.status(500).send({
        status: "error",
        message: "Error al actualizar, verifique los datos",
      });
    }
  },
};

module.exports = controllerProduct;
