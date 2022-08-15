import { Elements} from '@stripe/react-stripe-js';
import React, {useState} from 'react';
import "./Payment.css";
import { useStatevalue } from '../StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import PaymentHeader from './PaymentHeader/PaymentHeader';
import PaymentCard from './PaymentCard/PaymentCard';
import Footer from '../Footer/Footer';




function Payment() {

    const [{basket, user}, dispatch] =useStatevalue();
    
    const promise = loadStripe(
        "pk_test_51HQTfVAbgW776kAW3QDLJEQxjhtrfeDHLdcDTnE6e3mFdycZmDawrPwx8pthrOIbxyPRWhzMy25u2UaDSTRvRuO400WCD1ZaE5"
      );


    // const element= useElements();


    
    const {clientSecret, setClientSecret}= useState(true);

    
    
    

    
    return (
        <>
        <div className="payment">
            <PaymentHeader />
            <Elements stripe={promise}>
            <PaymentCard />
            </Elements>
        

        </div>
        <Footer />
        </>
    )
}

export default Payment
