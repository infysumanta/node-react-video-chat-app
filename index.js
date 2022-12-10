require("dotenv").config();
const server = require("./app.js");
const mongoose = require("mongoose");
const config = require("./config/index.js");

mongoose
  .connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen(config.PORT, () => {
      console.log(`Server is listening on ${config.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Database connection failed server not started");
    console.log(error);
  });
