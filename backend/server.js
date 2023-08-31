const app = require("./app");
const connectDatabase = require("./db/Database");
const cloudinary = require("cloudinary");

// Stripe
require("dotenv").config();

const express = require("express");
app.use(express.json());
app.use(express.static("public"));

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const storeItems = new Map([
  [
    [1, { priceInCents: 10000, name: "Learn react today" }],
    [2, { priceInCents: 20000, name: "Learn CSS Today" }],
  ],
]);

app.post("/profile/create-checkout-session", (req, res) => {
  res.json({ url: "Hi" });
});

// apps.listen(3000);

// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("shutting down the server for handling uncaught exception");
});

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

//connect db
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on https://localhost:${process.env.PORT}`);
});

//unhandledpromise rejection
process.on("unhandleRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log(`Shutting down the server for unhandle promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
