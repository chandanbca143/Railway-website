const express = require("express");
const router = express.Router();
const trainController = require("../controllers/Train.controller");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.post("/create", adminMiddleware, trainController.createTrain);
router.put("/:id", adminMiddleware, trainController.updateTrain);
router.delete("/:id", adminMiddleware, trainController.deleteTrain);
router.get("/", trainController.getTrains);

module.exports = router;
