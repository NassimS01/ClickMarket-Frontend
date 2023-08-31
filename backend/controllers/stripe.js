const express = require("express");
const User = require("../models/user");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const Stripe = require("stripe");
const stripe = require("stripe")(
  "sk_test_51NkcvmCpEyawkJLLNKTOcBBzLewiwbDUhuH4dOPfLyLNZTSVFhWgr2pFJAidtDqUmrynsGGHfHYlcud5P2oEyoXn00dZe1siUA"
);

router.post(
  "/create-checkout-session",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId);
      if (!user) {
        return next(new ErrorHandler("Usuario no encontrado", 400));
      }

      const line_items = req.body.cartItems.map((item) => {
        return {
          price_data: {
            currency: "ars",
            product_data: {
              name: item.name,
              description: item.description,
              images: [item.images.url],
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      });

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        shipping_address_collection: {
          allowed_countries: ["AR"],
        },
        shipping_options: [
          {
            shipping_rate_data: {
              type: "fixed_amount",
              fixed_amount: {
                amount: 3000 * 100,
                currency: "ars",
              },
              display_name: "Despachado al siguiente día",
              delivery_estimate: {
                minimum: {
                  unit: "business_day",
                  value: 1,
                },
                maximum: {
                  unit: "business_day",
                  value: 1,
                },
              },
            },
          },
        ],
        line_items,
        mode: "payment",
        success_url: `${process.env.SERVER_URL}/cart`,
        cancel_url: `${process.env.SERVER_URL}/cart`,
      });

      res.json({ url: session.url });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;
