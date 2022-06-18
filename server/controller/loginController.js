// external imports
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// do login
async function login(req,res,next) {
    
    try {
        const pass = "$2b$10$HyYa9G6bAXEm/MbJr0/vuetJdkbqO3YYqNT9ucQGWTV8tm.eM0NGW";
    const isValidPassword = await bcrypt.compare(req.body.password,pass);

    if(isValidPassword) {
        // prepare the object ot generate token
        const userObject = {
            email: req.body.email,
            name : "Nadim",
            role: "Seller",
        };

        // generate token
        const token = jwt.sign(userObject,process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXPIRY,
        });

        // set cookie
       res.cookie(process.env.COOKIE_NAME, token, {
            maxAge: process.env.JWT_EXPIRY,
            httpOnly: true,
            signed: true,
        });
       res.locals.loggedInUser = userObject;
        res.status(200).json(token);
        
    } else {
        res.status(500).json("Internal Error");
    }
    } catch (error) {
        res.status(500).json(error);
    }
}

// do logout
function logout(req,res) {
    res.clearCookie(process.env.COOKIE_NAME);
    res.send("logged out");
}

module.exports = {
    login,
    logout
}