const asyncHandler = require("express-async-handler");
const User = require("../mongodb/model/User");
const { encryptPassword, verifyPassword } = require("../utils/password");

const registerUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const userExist = await User.findOne({ email });
        if (userExist) {
            res.status(400);
            throw new Error("User is already registered");
        } else {
            const encryptedPassword = await encryptPassword(password);
            const userCreated = await User.create({
                email: email,
                password: encryptedPassword
            });
            if (userCreated) {
                res.status(201).json({
                    userId: userCreated._id,
                    email: userCreated.email
                });
            } else {
                res.status(400);
                throw new Error("Failed to create the user")
            }
        }
    } else {
        res.status(400);
        throw new Error("Please fill in all the fields");
    }
});

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const userExist = await User.findOne({ email });
        if (userExist) {
            const verified = await verifyPassword(password, userExist.password);
            if (verified) {
                res.status(200).json({
                    userId: userExist._id,
                    email: userExist.email
                });
            } else {
                res.status(400);
                throw new Error("Invalid credentials")
            }
        } else {
            res.status(400);
            throw new Error("User is not registered");
        }
    } else {
        res.status(400);
        throw new Error("Please fill in all the fields");
    }
});

module.exports = { registerUser, loginUser };