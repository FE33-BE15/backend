const express = require("express");
const router = express.Router();
const controllerUsers = require("../modul/users/controller-users");

router.get("/", function (req, res, next) {
  res.send("response with a resource");
});

router.post("/register", controllerUsers.register);
router.post("/login", controllerUsers.login);

module.exports = router;
