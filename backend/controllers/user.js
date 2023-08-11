const express = require("express");
const path = require("path");
const User = require("../models/user")
const router = express.Router();
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const { isAuthenticated, isAdmin } = require("../middleware/auth");
const cloudinary = require("cloudinary")
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");

const strongPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

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
            message: `El usuario ha sido creado correctamente!`,
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
            const { email, password } = req.body;

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
            const { email, password, name } = req.body;

            const user = await User.findOne({ email }).select("+password");

            if (!user) {
                return next(new ErrorHandler("Usuario no encontrado", 400));
            }

            const isPasswordValid = await user.comparePassword(password);

            if (!isPasswordValid) {
                return next(
                    new ErrorHandler("Password incorrecto", 400)
                );
            }

            user.name = name;
            user.email = email;

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
                    width: 150,
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

// update user password
router.put(
    "/update-user-password",
    isAuthenticated,
    catchAsyncErrors(async (req, res, next) => {
        try {
            const user = await User.findById(req.user.id).select("+password");

            const isPasswordMatched = await user.comparePassword(
                req.body.oldPassword
            );

            if (!isPasswordMatched) {
                return next(new ErrorHandler("La contraseña vieja es incorrecta!", 400));
            }

            if (req.body.newPassword !== req.body.confirmPassword) {
                return next(
                    new ErrorHandler("Las contraseñas no coinciden!", 400)
                );
            }
            user.password = req.body.newPassword;

            await user.save();

            res.status(200).json({
                success: true,
                message: "Contraseña cambiada con exito!",
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

// delete users --- admin
router.delete(
    "/delete-user/:id",
    isAuthenticated,
    isAdmin("Admin"),
    catchAsyncErrors(async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);

            if (!user) {
                return next(
                    new ErrorHandler("No se encontro el usuario", 400)
                );
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

module.exports = router;