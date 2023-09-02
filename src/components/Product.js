import React, { useEffect } from "react";

import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
const Product = ({ name, id, imgURL, price }) => {

  const dispatch = useDispatch()
 //const cart = useSelector((state) => state.cart.itemList);

  const handleAddToCard = () => {
    dispatch(cartActions.addToCard({
      id,
      name,
      price,
    }))
  }

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={handleAddToCard}>Add to cart</button>
    </div>
  );
};

export default Product;
