import React, { useContext } from "react";

import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../Context/AppContext";
import { Link } from "react-router-dom";

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
      </div>
      {/* formatação preço total */}
      <div className="cart-resume">{totalPrice.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</div>

      {/* Confirmar a compra */}
      <div className="payButton">
        <Link to='/pagamento'>
          <button>Confirmar</button>
        </Link>
      </div>
    </section>
  );
}

export default Cart;