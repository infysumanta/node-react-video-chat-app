const jwt = require("jsonwebtoken");
const config = require("../config/index");

const verifyTokenSocket = async (socket, next) => {
  const token = socket.handshake.auth?.token;

  try {
    const decoded = await jwt.verify(token, config.JWT_SECRET);
    socket.user = decoded;
  } catch (error) {
    console.log(error);
    const socketError = new Error("NOT AUTHORIZED");
    return next(socketError);
  }
  next();
};

module.exports = verifyTokenSocket;
