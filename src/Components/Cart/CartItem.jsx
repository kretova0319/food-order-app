import React from "react";
import data from "../../assets/Data/data";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../Redax/cartSlice";

export default function CartItem({ cartItem }) {
  console.log(cartItem);
  const dishes = data.find((item) => item.id === cartItem.dishId);
  console.log(dishes);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div>
        <img className="cartpicture" src={`./${dishes.img}.jpg`} />
      </div>
      <div>
        <h3>{dishes.name}</h3>
        <p>Number of portions: {cartItem.quantity}</p>
        <p>Price: ${dishes.price * cartItem.quantity}</p>
        <span
          onClick={() =>
            dispatch(removeItemFromCart({ cartItemId: cartItem.id }))
          }
        >
          <img
            className="icon"
            src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"
          />
        </span>
      </div>
    </div>
  );
}
