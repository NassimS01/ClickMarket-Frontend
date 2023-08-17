const express = require("express");
const path = require("path");
const User = require("../models/user");
const Product = require("../models/product");
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const cloudinary = require("cloudinary");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const catchAsyncError = require("../middleware/catchAsyncError");

const strongPasswordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

router.post("/create-user", async (req, res, next) => {
    try {
        const { name, email, password, avatar } = req.body;
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            return next(new ErrorHandler("El usuario ya existe", 400));
        }

        if (!strongPasswordRegex.test(password)) {
            return next(new ErrorHandler("La contraseña debe tener al menos 8 caracteres y contener al menos una letra mayúscula, una letra minúscula y un número.", 400));
        }


        let avatarData = {};

        if (avatar) {
            const myCloud = await cloudinary.v2.uploader.upload(avatar, {
                folder: "avatars",
                width: 150,
            });

            avatarData = {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            };
        } else {
            avatarData = {
                public_id: "avatars/avatar_ynb8zc.svg",
                url: "https://res.cloudinary.com/deolzbrpf/image/upload/v1691644404/avatars/avatar_ynb8zc.svg",
            };
        }

        const user = {
            name: name,
            email: email,
            password: password,
            avatar: avatarData,
        };

        const newUser = await User.create(user);
        res.status(201).json({
            success: true,
            message: `Tu cuenta ha sido creada correctamente!`,
            newUser,
        });

    } catch (error) {
        return next(new ErrorHandler(error.message, 400))
    }
});

// login user
router.post(
    "/login-user",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const { email, password, active } = req.body;

            if (!email || !password) {
                return next(new ErrorHandler("Debes rellenar todos los campos!", 400));
            }

            if (!email || !password) {
                return next(new ErrorHandler("Debes rellenar todos los campos!", 400));
            }

            const user = await User.findOne({ email }).select("+password");

            if (!user) {
                return next(new ErrorHandler("El usuario no existe!", 400));
            }

            const isPasswordValid = await user.comparePassword(password);

            if (!isPasswordValid) {
                return next(
                    new ErrorHandler("La contraseña ingresada es incorrecta", 400)
                );
            }

            if (!user.active) {
                return next(
                    new ErrorHandler(
                        "La cuenta debe ser activada por un administrador",
                        400
                    )
                );
            }

            sendToken(user, 201, res);
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// load user
router.get(
    "/getuser",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const user = await User.findById(req.user.id);

            if (!user) {
                return next(new ErrorHandler("El usuario no existe", 400));
            }

            res.status(200).json({
                success: true,
                user,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// log out user
router.get(
    "/logout",
    catchAsyncErrors(async (req, res, next) => {
        try {
            res.cookie("token", null, {
                expires: new Date(Date.now()),
                httpOnly: true,
                sameSite: "none",
                secure: true,
            });
            res.status(201).json({
                success: true,
                message: "Cerraste sesion con exito!",
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// update user info
router.put(
    "/update-user-info",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const { name, email, oldPassword, newPassword, repeatNewPassword } = req.body;

            const user = await User.findOne({ email }).select("+password");

            if (!user) {
                return next(new ErrorHandler("Usuario no encontrado", 400));
            }

            const isPasswordValid = await user.comparePassword(oldPassword);

            if (!isPasswordValid) {
                return next(
                    new ErrorHandler("La contraseña vieja es incorrecta", 400)
                );
            }

            if (newPassword !== repeatNewPassword) {
                return next(
                    new ErrorHandler("Las contraseñas ingresadas no coinciden", 400)
                );
            }

            user.name = name;
            user.password = newPassword;

            await user.save();

            res.status(201).json({
                success: true,
                user,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// update user avatar
router.put(
    "/update-avatar",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            let existsUser = await User.findById(req.user.id);
            if (req.body.avatar !== "") {
                const imageId = existsUser.avatar.public_id;

                await cloudinary.v2.uploader.destroy(imageId);

                const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
                    folder: "avatars",
                    width: 200,
                });

                existsUser.avatar = {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                };
            }

            await existsUser.save();

            res.status(200).json({
                success: true,
                user: existsUser,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// find user information with the userId
router.get(
    "/user-info/:id",
    catchAsyncErrors(async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);

            res.status(201).json({
                success: true,
                user,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// add product to user wishlist
router.post(
    "/add-to-wishlist/:id",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const user = await User.findById(req.user.id);

            const product = await Product.findById(req.params.id);

            if (user.wishlist.includes(product._id)) {
                user.wishlist.pull(product._id);
            } else {
                user.wishlist.push(product);
            }

            await user.save();

            res.status(201).json({
                success: true,
                message: "Producto agregado a la lista de deseos!",
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// remove product from user wishlist
router.delete(
    "/remove-from-wishlist/:id",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const user = await User.findById(req.user.id);

            const product = await Product.findById(req.params.id);

            user.wishlist.pull(product._id);
            await user.save();

            res.status(200).json({
                success: true,
                message: "Producto eliminado de la lista de deseos!",
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// all users --- for admin
router.get(
    "/admin-all-users",
    isAuthenticated,
    isAdmin("Admin"),
    catchAsyncErrors(async (req, res, next) => {
        try {
            const users = await User.find().sort({
                createdAt: -1,
            });
            res.status(201).json({
                success: true,
                users,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// active user --admin
router.put(
    "/active-user/:id",
    isAuthenticated,
    isAdmin("Admin"),
    catchAsyncErrors(async (req, res, next) => {
        try {
            const userId = req.params.id;
            const updatedUserData = req.body;

            const existingUser = await User.findById(userId);
            if (!existingUser) {
                return next(new ErrorHandler("Usuario no encontrado", 400));
            }

            existingUser.active = updatedUserData.active;

            await existingUser.save();

            res.status(201).json({
                success: true,
                message: "Usuario habilitado exitosamente",
                updatedUser: existingUser,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// delete users --- admin
router.delete(
    "/delete-user/:id",
    isAuthenticated,
    isAdmin("Admin"),
    catchAsyncErrors(async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);

            if (!user) {
                return next(new ErrorHandler("No se encontro el usuario", 400));
            }

            const imageId = user.avatar.public_id;

            await cloudinary.v2.uploader.destroy(imageId);

            await User.findByIdAndDelete(req.params.id);

            res.status(201).json({
                success: true,
                message: "El usuario ha sido eliminado!",
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// get user wishlist
router.get(
    "/get-user-wishlist",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const user = await User.findById(req.user.id).populate('wishlist');

            if (!user) {
                return next(new ErrorHandler("Usuario no encontrado", 400));
            }

            res.status(200).json({
                success: true,
                userWishlist: user.wishlist,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// get user cart
router.get(
    "/get-user-cart",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const user = await User.findById(req.user.id).populate('cart');

            if (!user) {
                return next(new ErrorHandler("Usuario no encontrado", 400));
            }

            res.status(200).json({
                success: true,
                userCart: user.cart,
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// add product to user cart
router.post(
    "/add-to-cart/:id",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const user = await User.findById(req.user.id);

            const product = await Product.findById(req.params.id);

            if (user.cart.includes(product._id)) {
                user.cart.pull(product._id);
            } else {
                user.cart.push(product);
            }

            await user.save();

            res.status(201).json({
                success: true,
                message: "Producto agregado al carrito!",
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// remove product from cart
router.delete(
    "/remove-from-cart/:id",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const user = await User.findById(req.user.id);

            const product = await Product.findById(req.params.id);

            user.cart.pull(product._id);
            await user.save();

            res.status(200).json({
                success: true,
                message: "Producto eliminado del carrito!",
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// add order
router.post(
    "/add-order",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const userId = req.user.id;
            console.log(req.body)
            const { userEmail, address, city, zip, orderId, products } = req.body;


            const user = await User.findById(userId);

            if (!user) {
                return next(new ErrorHandler("Usuario no encontrado", 400));
            }

            user.order.push({
                userEmail,
                address,
                city,
                zip,
                orderId,
                products,
            });

            await user.save();

            res.status(201).json({
                success: true,
                message: "Orden agregada al usuario correctamente",
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

// Quitar una orden del usuario
router.delete(
    "/remove-order/:orderId",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const userId = req.user.id;
            const orderIdToRemove = req.params.orderId;

            const user = await User.findById(userId);

            if (!user) {
                return next(new ErrorHandler("Usuario no encontrado", 400));
            }

            // Encontrar y quitar la orden según el orderId
            user.order = user.order.filter(userOrder => userOrder.orderId !== orderIdToRemove);

            await user.save();

            res.status(200).json({
                success: true,
                message: "Orden eliminada del usuario correctamente",
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);

router.delete(
    "/clear-user-cart",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const userId = req.user.id;

            const user = await User.findById(userId);

            if (!user) {
                return next(new ErrorHandler("Usuario no encontrado", 400));
            }

            user.cart = [];

            await user.save();

            res.status(200).json({
                success: true,
                message: "Carrito Vacio",
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 500));
        }
    })
);



module.exports = router;
