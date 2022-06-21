// external imports
path = require('path')
const express = require("express");
const fs = require('fs');

// internal imports
const { videoUploader } = require("../controller/videoController");
const {checkLogin} = require("../middlewares/common/checkLogin");

const router = express.Router();

// process login
router.post("/",checkLogin,videoUploader);


// get a all

router.get("/:id",(req,res)=>{
    const id = req.params.id;
    
// //joining path of directory 
// const directoryPath = path.join(__dirname,'..','720p');
// //passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         const filePath = path.join(__dirname,'..','720p',id,file,);
//         res.sendFile(filePath);
//     });
// })
    // const filePath = path.join(__dirname,'..','720p',id,'big_buck_bunny_480p_2mb.mp4',);
    const filePath = path.join(__dirname,'..','720p',`${id}.mp4`,);
    res.sendFile(filePath);
});




module.exports = router;