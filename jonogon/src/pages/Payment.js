import { useState } from "react";
import StripeContainer from "../components/Containers/StripeContainer";

function Payment() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div>
      if(showItem){<StripeContainer />}
      else
      {
        <>
          <button onClick={() => setShowItem(true)}>Buy</button>
        </>
      }
    </div>
  );
}

export default Payment;