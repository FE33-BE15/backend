require("dotenv").config();
const jwt = require("jsonwebtoken");
const generateToken = (user) => {
  const token = jwt.sign({ id: user.id, email: user.email, password: user.password }, process.env.JWTPRIVATEKEY);
  return token;
};

module.exports = generateToken;
