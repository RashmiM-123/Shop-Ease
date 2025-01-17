import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem" style={{backgroundColor:'#F8F1E9'}}>
      <div >
      <img src={productImage} style={{marginRight:'80px'}}/>
      </div>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p style={{marginLeft:'60px',fontSize:'25px'}}> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
