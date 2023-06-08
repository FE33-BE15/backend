const bcrypt = require("bcrypt");
const Models = require("../../database/models");
const generateToken = require("../../utils/generateAuthToken");
const User = Models.users;

const register = async (req, res) => {
  try {
    const { name, email, password, age, weight, height, gender, activity, roleId } = req.body;

    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      age,
      weight,
      height,
      gender,
      activity,
      roleId: 2,
    });

    const token = generateToken(newUser);

    return res.status(200).json({ user: newUser, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password!" });
    }

    const token = generateToken(user);

    return res.status(200).json({ user, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  register,
  login,
};
