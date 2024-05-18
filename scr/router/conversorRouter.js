const express = require("express");
const router = express.Router();
const conversorController = require("../controller/conversorController.js");

router.get("/conversor", conversorController.getAllConversor);
router.post("/conversor", conversorController.createConversor);

module.exports = router;