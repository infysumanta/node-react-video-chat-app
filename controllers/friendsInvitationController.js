const User = require("./../models/user.schema");
const FriendInvitation = require("../models/friendInvitation.schema");

exports.postInvite = async (req, res, next) => {
  const { email } = req.body;

  if (email.toLowerCase() === req.user.email.toLowerCase()) {
    return res.status(409).send("Sorry You cannot become friend with youself");
  }

  const targetUser = await User.findOne({ email });
  if (!targetUser) {
    return res.status(404).send("Please check the Email Address");
  }

  const invitationAlreadyReceived = await FriendInvitation.findOne({
    senderId: req.user.userId,
    receiverId: targetUser._id,
  });

  console.log("hoihihi");

  if (invitationAlreadyReceived) {
    return res.status(409).send("Invitation Already Exist");
  }

  const userAlreadyFriend = targetUser.friends.find(
    (fId) => fId.toString() === req.user.userId.toString()
  );
  if (userAlreadyFriend) {
    return res
      .status(409)
      .send("Friend Already added, Please check friend List");
  }

  const newInvitation = await FriendInvitation.create({
    senderId: req.user.userId,
    receiverId: targetUser._id,
  });

  res.status(201).send("Invitation has been Sent");
};
