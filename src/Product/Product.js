import React from "react";
import Footer from "../Footer/Footer";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({id, title, image, price, rating}) {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket= () => {
     //dispatch the item into the data layer
     dispatch ({
       type: "ADD_TO_BASKET",
       item: {
         id: id,
         title: title,
         image: image,
         price: price,
         rating: rating,
       }
     })
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {Array(rating)           
           .fill()
           .map((_, i) => (
            <p><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t9a/1/32/1f31f.png" alt="" /></p>
             ))
           }   
          
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
