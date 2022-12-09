const mongoose = require("mongoose");
const brcypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await brcypt.hash(this.password, 10);
  next();
});

userSchema.methods.getJWTToken = function () {
  return jwt.sign(
    {
      userId: this._id,
      email: this.email,
    },
    config.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

userSchema.methods.comparePassword = async function (password) {
  return await brcypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
