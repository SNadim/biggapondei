const stripe = require("stripe")("sk_test_51L6dRECsRN7UuT0UtsmFEysdhjotlku7Sr1Tx52WPqpaJDdyNZViqxh8Ut4qTxj3baRw4KYWInf53aRycka3Rwza006AfJ8caM");
const uuid = require("uuidv4");

async function payment(req, res) {
    let product = req.body
    try {
      const response = await stripe.paymentIntents.create({
        amount: product.amount,
        currency: "USD",
        description: product.description,
        payment_method: product.id,
        confirm: true
      })
      console.log("Payment Sucessful")
      res.json({
        message: "Payment successful",
        success: true
      })
    } catch (error) {
      console.log("Error", error)
      res.json({
        message: "Payment failed",
        success: false
      })
    }
  
}

module.exports = {
    payment
}