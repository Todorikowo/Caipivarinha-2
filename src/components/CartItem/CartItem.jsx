import React, { useContext } from "react";
import propTypes from "prop-types";
import { LiaCartArrowDownSolid } from "react-icons/lia";

import "./CartItem.css";
import AppContext from "../../Context/AppContext";

// informações do produto
function CartItem({ data }){

  //constantes
  const {cartItems, setCartItems} = useContext(AppContext);
  const {id, thumbnail, title, price} = data;

  //remove itens do carrinho
  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  //produtos no carrinho
  return(
    //item no carrinho
    <section className="cart-item">
      {/* img produto */}
      <img src={thumbnail} alt="Imagem do produto" className="cart-item-image" />
      {/* conteudo do carrinho */}
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}</h3>
{/* botão de remover item do carrinho */}
        <button type="button" className="button__remove-item" onClick={handleRemoveItem}><LiaCartArrowDownSolid /></button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;