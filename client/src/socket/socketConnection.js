import io from "socket.io-client";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;
  const sockerUrl =
    process.env.NODE_ENV == "development" ? "http://localhost:5000" : "";
  socket = io(sockerUrl, {
    auth: {
      token: jwtToken,
    },
  });

  socket.on("connect", () => {
    console.log("Successfully connected with socket.io Server");
    console.log(socket.id);
  });
};
