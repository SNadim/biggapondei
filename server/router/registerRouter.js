// external imports
const express = require("express");
const multer = require("multer");

const upload = multer();

// internal imports
const { register } = require("../controller/registerController");
const { checkLogin } = require("../middlewares/common/checkLogin");
const { addUserValidators, addUserValidationHandler } = require("../middlewares/register/registerValidators");

const router = express.Router();

// register process
router.post("/",upload.none(),addUserValidators,addUserValidationHandler,register);

module.exports = router;