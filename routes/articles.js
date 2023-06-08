const express = require("express");
const router = express.Router();
const controllerArtciles = require("../modul/articles/controller-articles");

// router.get("/", function (req, res, next) {
//   res.send("response with a resource");
// });

router.post("/", controllerArtciles.createArticle);
router.get("/", controllerArtciles.listArticle);
router.get("/:id", controllerArtciles.articleById);

module.exports = router;
