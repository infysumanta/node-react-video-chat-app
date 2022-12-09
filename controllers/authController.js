const User = require("./../models/user.schema");

exports.register = async (req, res, next) => {
  try {
    const { email, username, password } = req.body;
    const isEmailExist = await User.exists({ email: email.toLowerCase() });

    if (isEmailExist) {
      return res.status(409).send("Email is alredy Registered with us");
    }

    const isUsernameExist = await User.exists({
      username: username.toLowerCase(),
    });

    if (isUsernameExist) {
      return res.status(409).send("Username is alredy in use");
    }

    const user = await User.create({
      email: email.toLowerCase(),
      username: username.toLowerCase(),
      password: password,
    });

    res.status(200).send({
      userDetails: {
        email: user.email,
        username: user.username,
        token: user.getJWTToken(),
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occured. Please try Again" + error);
  }
};
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user && (await user.comparePassword(password))) {
      return res.status(200).send({
        userDetails: {
          email: user.email,
          username: user.username,
          token: user.getJWTToken(),
        },
      });
    }

    return res.status(401).send("Invalid Credentials.");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occured. Please try Again" + error);
  }
};
