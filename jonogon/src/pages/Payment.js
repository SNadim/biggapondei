import { useState } from "react";
import StripeContainer from "../components/Containers/StripeContainer";

function Payment() {
  const [showItem, setShowItem] = useState(false);
  if (showItem) {
    return (
      < StripeContainer />
    );
  }
  return (
    <button onClick={() => setShowItem(true)}>Buy</button>
  );
}

export default Payment;