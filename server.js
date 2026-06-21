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

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
