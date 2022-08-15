import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutProduct from '../../CheckoutProduct/CheckoutProduct';
import { useStatevalue } from '../../StateProvider';



function PaymentHeader() {
  const [{basket, user}, dispatch] =useStatevalue();

  return (
    <div>

    
    <div className='payment_container'>
    <h1>Checkout (<Link to= "/checkout">{basket?.length} items</Link>)</h1>

    </div>
                {/* Payment section - delevery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delevery address</h3>
                        </div>
                        <div className="payment_address">
                            <p>{user ?.email}</p>
                            <p>123 React Lane</p>
                            <p>Dhaka, Bangladesh</p>
                        
                    </div>

                </div>
                {/* Payment section - Review Items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="pament_items">
                        {basket.map(item =>
                            <CheckoutProduct
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price= {item.price}
                            rating= {item.rating}

                            
                            />)}
                    </div>
                    
                </div>
                </div>
  )
}

export default PaymentHeader