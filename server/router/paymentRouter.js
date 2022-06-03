// external imports
const express = require("express");

// internal imports
const { payment } = require("../controller/paymentController");

const router = express.Router();

// process login
router.post("/",payment);

module.exports = router;