"use strict";
const express = require("express");
const ProductsController = require("../controllers/productsControllers");

const router = express.Router();

router.post("/save", ProductsController.save);
router.get("/products", ProductsController.getProducts);
router.get("/product/:id", ProductsController.getProduct);
router.get("/products-sse", ProductsController.updateCrud);
router.put("/product/:id", ProductsController.update);
router.delete("/product/:id", ProductsController.delete);

module.exports = router;
