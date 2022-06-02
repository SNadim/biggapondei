// external import
const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const busboy = require('connect-busboy');
const path = require("path");


// internal imports
const loginRouter = require("./router/loginRouter");
const registerRouter = require("./router/registerRouter");
const videoRouter = require("./router/videoRouter");

// app initialization
const app = express();

// middleware
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(busboy());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{res.status(200).json("Hello World")});

//routing setup
app.use("/",loginRouter);
app.use("/login",loginRouter);
app.use("/register",registerRouter);
app.use("/video", videoRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;

    console.error(err.message,err.stack);

    res.status(statusCode).json({message:err.message});
})

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})