const User = require("../model/user");
const bcrypt = require("bcryptjs");
const config = require("../config/config");
const jwt = require("jsonwebtoken");

exports.registerPage = (req, res) => {
  res.json({ message: "homepage" });
};

// regsiter new user

exports.registerNewUser = async (req, res) => {
  try{
  const body= req.body;
  // check user fill all field
  console.log(req.body.username);
  console.log(req.body.email);

  console.log(req.body.password);

  if (!body.username || !body.email || !body.password || !body.gender) {
    res.json("fill all required field oooo");
  } else if (body.password.length < 6 || body.username.length < 3) {
    res.json(
      "password must be more than six charater and name must more > 3 charater "
    );
  } else {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await User.create({
      username: body.username,
      email: body.email,
      gender: body.gender,
      password: hashedPassword,
    });

    res.json({ user: newUser, message: "successful signup" });
  }
}
catch(error){
  console.log(error.message)

}
};

//get all user
exports.getAllUsers = async (req, res) => {
  const user = await User.find();
  res.json({
    users: user,
    message: "users",
  });
};

// get a single user
exports.getOneUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.json({
      message: `sorry, no user`,
    });
  }
};

// delete center

exports.deleteUser = async (req, res) => {
  const deleted = await User.findByIdAndRemove(req.params.id);
  if (deleted) {
    res.json({
      message: `error in deleting the center`,
    });
  } else {
    res.json({
      message: `you just deleted a center`,
    });
  }
};

// update center

exports.updateUser = async (req, res) => {
  const update = await User.findOne({
    _id: req.params.id,
  });
  if (update) {
    update.username = req.body.username || update.username;
    update.email = req.body.email || update.email;
    update.gender = req.body.gender || update.gender;

    await update.save();
    res.json({
      message: `center update successful`,
      update,
    });
  } else {
    res.json({
      message: "no center",
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      message: "fill all required filed",
    });
  }
  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(401)
      .json({ error: " no user Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res
      .status(401)
      .json({ error: " pass not Invalid email or password" });
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user._id }, config.secret, {
    expiresIn: "1h",
  });

  res.json({ token: token, user: user });
};
