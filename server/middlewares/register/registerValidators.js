const {body,validationResult} = require("express-validator");
const createError = require("http-errors");

const addUserValidators = [
    body("name")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other than alphabet")
    .trim(),
    body("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim(),
    body("password")
    .isStrongPassword()
    .withMessage(
      "Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol"
    ),
    body("confirmPassword")
    .custom(async (confirmPassword, {req}) => {
        const password = req.body.password
        if(password !== confirmPassword){
            throw createError("Password must be same");
        }
      }),
];

const addUserValidationHandler = (req,res,next) =>{
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    if(Object.keys(mappedErrors).length===0) {
        next();
    } else {
        // response the errors
            res.status(200).json({
            errors: mappedErrors,
          });
    }
}

module.exports = {
    addUserValidators,
    addUserValidationHandler,
};