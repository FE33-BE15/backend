require("dotenv").config();
const jwt = require("jsonwebtoken");

const vTokenBearer = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (bearerHeader) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    try {
      const decoded = jwt.verify(bearerToken, process.env.JWTPRIVATEKEY);
      req.user = decoded;
      req.token = bearerToken;
      next();
    } catch (error) {
      res.status(401).send("Invalid Token!");
    }
  } else {
    res.sendStatus(401);
  }
};

module.exports = { vTokenBearer };
