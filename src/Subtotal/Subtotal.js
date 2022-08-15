import React from 'react'
import "./Subtotal.css"
import Currencyformat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from '../reducer';
import {  useNavigate } from 'react-router-dom';


function Subtotal() {
    const navigate= useNavigate();
    const [{basket}, dispatch] = useStateValue();


    //Calculate the basket total


    return (
        <div className="subtotal">
            <Currencyformat
            renderText={(value) => (
                <>
         
         <p>
             Subtotal ({basket?.length}, items): <strong>{value}</strong>
             
         </p>
         <small className="subtotal_gift">
             <input type="checkbox" /> This order contains a gift
         </small>
         </>

            )
            }
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />
            <button onClick={e => navigate('/payment',{replace:true})}>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal
