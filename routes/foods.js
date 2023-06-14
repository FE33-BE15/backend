const express = require("express");
const router = express.Router();
const controllerFoods = require("../modul/foods/controller-foods");

router.get("/", controllerFoods.getAll);

module.exports = router;