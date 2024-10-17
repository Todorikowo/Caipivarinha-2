import React, { useContext } from "react";
import { LiaShoppingCartSolid } from "react-icons/lia";

import "./CartButton.css";
import AppContext from "../../Context/AppContext";

function CartButton() {
// constantes
  const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext)

  // botão de abrir e fechar carrinho
  return(
    <button type="button" className="cart__button" onClick={() => setIsCartVisible(!isCartVisible)}>
      <LiaShoppingCartSolid />
      {/* mostra a quantidade de itens no carrinho*/}
      {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
    </button>
  );
}

export default CartButton;