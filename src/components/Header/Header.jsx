import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import CartButton from "../CartButton/CartButton";
import "./Header.css";


//header
function Header() {
  return(
    <header className="header">
      {/* itens */}
      <div className="container-itens">
      {/* barra de pesquisa */}
        <SearchBar />
        {/* botão do carrinho */}
        <CartButton />
      </div>
    </header>
  )
}

export default Header;