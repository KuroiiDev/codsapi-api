// server.js

// Importing Dependencies
import dotenv from "dotenv";
import express from "express";

// load config
dotenv.config();

// initialize express app
const app = express();

// defining port
const PORT = process.env.PORT || 3000;

// logging for all requests
app.use((req, res, next) => {
    console.log(`${Date.now()} - ${req.method} ${req.path}`);
    next();
});

// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});
