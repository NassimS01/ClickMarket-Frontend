"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  descrip: String,
  fav: Boolean,
  category: String,
  stock: Number,
  state: Boolean,
});

module.exports = mongoose.model("Products", ProductsSchema);
