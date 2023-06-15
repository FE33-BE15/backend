require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(payload, process.env.JWTPRIVATEKEY);
  return token;
};

module.exports = generateToken;
