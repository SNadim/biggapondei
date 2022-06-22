const router = require("express").Router();
const stripe = require("stripe")("sk_test_51L6dRECsRN7UuT0UtsmFEysdhjotlku7Sr1Tx52WPqpaJDdyNZViqxh8Ut4qTxj3baRw4KYWInf53aRycka3Rwza006AfJ8caM");

router.post("/", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (err, response) => {
      if (err) {
        console.log(err);
        res.status(500).json("server side error!");
      } else {
        res.status(200).json(response);
      }
    }
  );

  // stripe.charges.create(
  //   {
  //     source: req.body.tokenId,
  //     amount: req.body.amount,
  //     currency: "usd",
  //   },
  //   (stripeErr, stripeRes) => {
  //     if (stripeErr) {
  //       // console.log(stripeErr);
  //       res.status(500).json("Hello World");
  //     } else {
  //       res.status(200).json(stripeRes);
  //     }
  //   }
  // );
});

module.exports = router;
