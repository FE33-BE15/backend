const express = require("express");
const router = express.Router();
const routerFoods = require("./foods");
const routerArticles = require("./articles");
const routerUsers = require("./users")

router.get("/", function (req, res, next) {
  res.render("index", { title: "Test" });
});

router.use("/foods", routerFoods);
router.use("/articles", routerArticles);
router.use("/users", routerUsers);

module.exports = router;
