import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import products from "../../../backend/data/products";

const Cart = () => {
  const cart = useSelector((state) => state.card.value);
  console.log(cart);
  return (
    <div>
      {cart.map((e, index) => {
        return (
          <div key={index}>
            <Link to={`/product/${e.id}`}>{e.name}</Link>
            {console.log(e.id)}
            <img alt="img" src={e.image}></img>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
