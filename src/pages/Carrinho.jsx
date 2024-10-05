import React from "react";
import Header from "../components/Header/Header";
import Products from "../components/Products/Products";
import Provider from "../Context/Provider";
import Cart from "../components/Cart/Cart";

// principal
function Carrinho() {
  return(
    // Provem as variaveis
    <Provider>
      {/* header */}
      <Header />
      {/* produtos */}
      <Products />
      {/* carrinho */}
      <Cart />
    </Provider>
  );
}

export default Carrinho;