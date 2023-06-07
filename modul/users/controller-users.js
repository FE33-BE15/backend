const bcrypt = require(bcrypt);
const Models = require("../../database/models");
const generateToken = require("../../utils/generateAuthToken");
const User = models.sequelize.models.user;

const register = async (req, res) => {
  try {
    const { name, email, password, age, weight, height, gender, activity, roleId } = req.body;
    const user = await User.findOne({
      where: {
        email,
      },
    });

    const createUser = await User.create({ name, email, password, age, weight, height, gender, activity, roleId });
    return res.status(200).json({ result: createUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  login,
  register,
};
