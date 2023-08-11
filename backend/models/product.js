const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Por favor, ingresa el nombre del producto!"],
  },
  description: {
    type: String,
    required: [true, "Por favor, ingresa la descripción del producto!"],
  },
  category: {
    type: String,
    required: [true, "Por favor, ingresa la categoria del producto!"],
  },
  price: {
    type: Number,
  },
  fav: {
    type: Boolean,
    default: false
  },
  discount: {
    type: Number,
    required: [false, "Ingresa el descuento del producto!"],
  },
  stock: {
    type: Number,
    required: [true, "Por favor, introduce el stock del producto!"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: false,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);