import React from "react";
import "./dish.css";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from "react";
import { addItemToCart } from "../../Redax/cartSlice";
import { useDispatch } from "react-redux";

export default function Dish({ dish }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="carddish">
      <img src={`./${dish.img}.jpg`} />
      <h2>{dish.name}</h2>
      <p>${dish.price}</p>
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
      <button className="addtocart"
        onClick={() => {
          dispatch(addItemToCart({ dish, quantity }));
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}
