const jwt = require("jsonwebtoken");

require("dotenv").config();

const jwtHelper = {
  signIn: (payload, option) => {
    return jwt.sign(payload, process.env.JWTPRIVATEKEY, option);
  },
  verify: (payload, option) => {
    return jwt.verify(payload, process.env.JWTPRIVATEKEY, option);
  },
};

module.exports = jwtHelper;