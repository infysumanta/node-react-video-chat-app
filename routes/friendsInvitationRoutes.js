const express = require("express");
const router = express.Router();

const Joi = require("joi");
const { postInvite } = require("../controllers/friendsInvitationController");
const { verifyToken } = require("../middlewares/auth");
const validator = require("express-joi-validation").createValidator();

const postFriendInvitationSchema = Joi.object({
  email: Joi.string().email().required(),
});

router
  .route("/invite")
  .post(verifyToken, validator.body(postFriendInvitationSchema), postInvite);
module.exports = router;
