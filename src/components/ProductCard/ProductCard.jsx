import React, { useContext } from "react";
import propTypes from "prop-types";

import "./ProductCard.css"
import { LiaCartPlusSolid } from "react-icons/lia";
import AppContext from "../../Context/AppContext";

//informações do produto no display
function ProductCard({ data }) {

  //constantes
  const { title,  thumbnail, price } = data;
  const {cartItems, setCartItems} = useContext(AppContext);
  //mostra os produtos antigos e novos do carrinho
  const handleAddCart = () => setCartItems([...cartItems, data]);

  //display card do produto
  return(
    <section className="product-card">
      {/* img produto */}
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
      alt="produto" 
      className="card__image"/>

{/* informação do produto */}
      <div className="card__infos">
        {/* preço em reais */}
        <h2 className="card__price">{price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}</h2>
        {/* nome produto */}
        <h2 className="card__title">{title} </h2>
      </div>

{/* botão de adicionar ao carrinho */}
      <button type="button" className="button_add-cart" onClick={handleAddCart}>
      <LiaCartPlusSolid />
      </button>

    </section>
  ); 
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;