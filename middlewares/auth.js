const jwt = require("jsonwebtoken");
const config = require("./../config/index");

const verifyToken = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers["authorization"];
  console.log(token);
  if (!token) {
    return res.status(403).send("Authentication Failed");
  }
  try {
    token = token.replace(/^Bearer\s+/, "");
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
  } catch (error) {
    return res.status(401).send("Invalid token");
  }
  next();
};

module.exports = {
  verifyToken,
};
