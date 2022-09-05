// Environment Variables Setup
const dotenv = require("dotenv");
dotenv.config();

// Server Setup
const app = require("express")();
const PORT = process.env.PORT || 5000;

// Dependencies - Local
const connectMongoDB = require("./mongodb/connection");

// Database Connection
connectMongoDB();

app.get("/", (req, res) => {
    res.send("Hello World From Server");
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})