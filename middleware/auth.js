require("dotenv").config();
const jwt = require("jsonwebtoken");

const vTokenHeader = (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).send("Access Denied!");

    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(404).send("Invalid Token!");
  }
};

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
      res.status(404).send("Invalid Token!");
    }
  } else {
    res.sendStatus(403);
  }
};

module.exports = { vTokenHeader, vTokenBearer };
