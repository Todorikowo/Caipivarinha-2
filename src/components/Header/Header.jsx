import React from "react";
import SearchBar from "../SearchBar/SearchBar";

import "./Header.css";
import CartButton from "../CartButton/CartButton";

//header
function Header() {
  return(
    <header className="header">
      {/* itens */}
      <div className="container">
      {/* barra de pesquisa */}
        <SearchBar />
        {/* botão do carrinho */}
        <CartButton />
      </div>
    </header>
  )
}

export default Header;