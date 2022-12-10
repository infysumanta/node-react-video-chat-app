const express = require("express");
const http = require("http");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const socketServer = require("./socketServer");

const app = express();
app.use(express.json());
app.use(cors());

// Register the Routes
app.use("/api/auth", authRoutes);

const server = http.createServer(app);
socketServer.registerSocketServer(server);

module.exports = server;
