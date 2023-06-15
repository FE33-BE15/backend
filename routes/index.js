const express = require("express");
const router = express.Router();
const routerFoods = require("./foods");
const routerArticles = require("./articles");
const controllerArticles = require("../modul/articles/controller-articles");
const routerUsers = require("./users");
const routerTrackings = require("./trackings");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Test" });
});

router.use("/foods", routerFoods);
router.use("/articles", routerArticles);
router.get("/articles/:id", controllerArticles.getById);
router.use("/users", routerUsers);
router.use("/trackings", routerTrackings);

module.exports = router;
