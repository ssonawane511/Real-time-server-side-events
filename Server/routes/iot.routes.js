const express = require("express");
const router = express.Router();
const { createIotController } = require('../controllers/iot.controller')

router.post("/", createIotController);

module.exports = router;
