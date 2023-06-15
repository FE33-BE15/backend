const express = require("express");
const router = express.Router();
const controllerTrackings = require("../modul/trackings/controller-trackings");
const authMiddleware = require("../middleware/index");

router.get("/:id", authMiddleware, controllerTrackings.getbyuid);
router.post("/:id", authMiddleware, controllerTrackings.addTracking);
router.delete("/:id", authMiddleware, controllerTrackings.deleteByid);
router.delete("/all/:id", authMiddleware, controllerTrackings.deleteAll);

module.exports = router;