import React, { useContext } from "react";

import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../Context/AppContext";

// carrinho lateral
function Cart() {

  // constantes
  const {cartItems, isCartVisible} = useContext(AppContext);

  // preço total
  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  // abre e fecha
  return (
    <section className={`cart ${isCartVisible ? "cart--active" : ""}`}>
      <div className="cart-items">
{/* pega as informações do produto no carrinho */}
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>)}

{/* define as informações recuperadas para o produto */}
        {/* <CartItem data={{thumbnail: "", title: "", price: ""}}/> */}
      </div>
      {/* formatação preço total */}
      <div className="cart-resume">{totalPrice.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</div>
    </section>
  );
}

export default Cart;