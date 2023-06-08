const express = require("express");
const router = express.Router();

const routerUsers = require("./users");
const routerArticles = require("./articles");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Test" });
});

router.use("/auth", routerUsers);
router.use("/articles", routerArticles);

module.exports = router;
