import React from "react";
import "./cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getCartItems } from "../../Redax/cartSlice";
import { getTotalPrice } from "../../Redax/cartSlice";

export default function Cart() {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div>
      <img
        className="cartIcon"
        src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"
      />
      <div class="total-box">
        <h3>TOTAL: $ {totalPrice}</h3>
      </div>
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} />
      ))}
    </div>
  );
}
