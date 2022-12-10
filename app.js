const express = require("express");
const http = require("http");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const socketServer = require("./socketServer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));
// Register the Routes
app.use("/api/auth", authRoutes);

app.use("*", (_, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const server = http.createServer(app);
socketServer.registerSocketServer(server);

module.exports = server;
