import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "../Form/PaymentForm"

const PUBLIC_KEY = "pk_test_51L6dRECsRN7UuT0Uz8yTOGSgjwpeD14AaGQOz8kukwbZokPgYGnh5UnvegrzbA0cozV6C4069BcVmBWeqsB79twD009ShmC4xo"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}
