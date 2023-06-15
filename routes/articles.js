const express = require("express");
const router = express.Router();
const controllerArticles = require("../modul/articles/controller-articles");

router.get("/", controllerArticles.getAll);
router.get("/:id", controllerArticles.getById);

module.exports = router;
