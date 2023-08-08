const express = require("express");
const path = require("path");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/ErrorHandler");
const Product = require("../models/product");

// create product
router.post(
    "/create-product",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const productData = req.body;

            const existingProduct = await Product.findOne({ name: productData.name });

            if (existingProduct) {
                return res.status(400).json({
                    success: false,
                    message: "Ya existe un producto con ese nombre",
                });
            }


            const product = await Product.create(productData);

            res.status(201).json({
                success: true,
                product,
            });
        } catch (error) {
            return next(new ErrorHandler(error, 400));
        }
    })
);


// get all products
router.get(
    "/get-all-products",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const products = await Product.find().sort({ createdAt: -1 });

            res.status(201).json({
                success: true,
                products,
            });
        } catch (error) {
            return next(new ErrorHandler(error, 400));
        }
    })
);

module.exports = router;