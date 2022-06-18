const jwt = require("jsonwebtoken");


// auth guard to protect routes that need authentication
const checkLogin = (req, res, next) => {
    let cookies = Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

    if(cookies) {
        try {
            token = cookies[process.env.COOKIE_NAME];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;

            // pass user info to response locals
            res.locals.loggedInUser = decoded;
            next();
        } catch (error) {
            res.status(500).json({
                errors: {
                  common: {
                    msg: "Authentication failure!",
                  },
                },
              });
        }
    } else {
        res.status(401).json({
        error: "Authentication failure!",
    });
    }
}

// redirect if already logged in
const redirectLoggedIn = function(req,res,next) {
  let cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;
    if (!cookies) {
      next();
    } else {
      res.redirect("/inbox");
    }
}

module.exports = {
  checkLogin,
  redirectLoggedIn
}