const express = require("express");
const { register, login } = require("../controllers/authController");
const router = express.Router();

const Joi = require("joi");
const { verifyToken } = require("../middlewares/auth");
const validator = require("express-joi-validation").createValidator();

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12).required(),
  email: Joi.string().email().required(),
});

router.route("/register").post(validator.body(registerSchema), register);
router.route("/login").post(validator.body(loginSchema), login);

// test route to verify the auth middleware
router.route("/authtest").post(verifyToken, (req, res) => {
  res.send("working");
});
module.exports = router;
