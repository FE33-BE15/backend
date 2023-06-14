const express = require("express");
const router = express.Router();

const routerUsers = require("./users");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Test" });
});

router.use("/auth", routerUsers);

module.exports = router;
