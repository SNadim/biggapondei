// external imports
path = require('path')
const express = require("express");
const fs = require('fs');

// internal imports
const { videoUploader } = require("../controller/videoController");

const router = express.Router();

// process login
router.post("/",videoUploader);


// file upload folder
const filePath = "./720p/final_626115cf9613da00bb6ec3b5_427622.mp4";

router.get("/",(req,res)=>{
    const filePath = path.join(__dirname,'..','720p','final_626115cf9613da00bb6ec3b5_427622.mp4',);
    res.sendFile(filePath);
});


module.exports = router;