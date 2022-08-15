import { CardElement, useStripe } from '@stripe/react-stripe-js';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import { useStatevalue } from '../../StateProvider';



function PaymentCard() {
    const stripe= useStripe();

  const [{basket, user}, dispatch] =useStatevalue();

  const {succeeded, setSucceeded} = useState(false);
  const {processing, setProcessing} = useState("");
  const {error, setError}= useState(null);
    const {disabled,setDisabled}= useState(true);

  const handleSubmit= async(event) => {
    //do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    //const payload= await stripe
}
const handleChange= e => {

  setDisabled(e.empty);
  setError(e.error? e.error.message:"");

}

useEffect(() => {
  //generate the special stripe secret which allows us to charge a customer

  const getClientSecret = async () => {
      const response = await Axios ({
          method: "post",
          //stripe expects the total in a currencies submits
          url: "/payments/create?Total = ${getBasketTotal(basket) *100 }"
      })
  }
  getClientSecret();
}, [basket])

  return (
    <div>
      <h3>Payment Method</h3>
      <form onSubmit={handleSubmit}>
      <CardElement onChange={handleChange}/>
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                renderText={(value)  =>  (
                                    <>
                                    <h1>Order Total: {(value)}</h1>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                            </div>
      </form>

      {error && <div>{error}</div>}
    </div>
  )
}

export default PaymentCard