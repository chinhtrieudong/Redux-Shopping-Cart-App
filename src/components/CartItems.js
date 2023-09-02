import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const itemList = useSelector(state =>  state.cart.itemList)

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {itemList.map((item, index) => <CartItem key={index} id={item.id} price={item.price} name={item.name} quantity={item.quantity} total={item.totalPrice}/>)}
          
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
