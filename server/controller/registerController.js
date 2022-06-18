// external imports
const createError = require("http-errors");
const bcrypt = require("bcrypt");

// do registration
async function register(req,res,next) {
    console.log(cookieHeader);
    let newUser;
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    newUser = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    }
    res.status(200).json(newUser);
}


module.exports = {
    register
}