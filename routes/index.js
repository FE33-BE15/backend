const express = require("express");
const router = express.Router();
const routerFoods = require("./foods");
const routerArticles = require("./articles");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Test" });
});

router.use("/foods", routerFoods);
router.use("/articles", routerArticles);

module.exports = router;
