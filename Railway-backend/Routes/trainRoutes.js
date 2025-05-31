const express = require("express");
const router = express.Router();
const trainController = require("../controllers/trainController");

router.post("/addTrain", trainController.addTrain);

module.exports = router;
