// Environment Variables Setup
const dotenv = require("dotenv");
dotenv.config();

// Server Setup
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Dependencies - Local
const connectMongoDB = require("./mongodb/connection");
const { registerUser, loginUser } = require("./controller/userController");
const { errorHandler } = require("./middleware/errorMiddleware");

// Database Connection
connectMongoDB();

// Body Data Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.post("/register", registerUser);
app.post("/login", loginUser);

// Middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})