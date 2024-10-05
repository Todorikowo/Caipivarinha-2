import React, {useState, useContext} from "react";
import { IoSearch } from "react-icons/io5";

import "./SearchBar.css";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../Context/AppContext";

function SearchBar(){
//constantes
  const { setProducts } = useContext(AppContext);
  const[searchValue, setSearchValue] = useState("");
  //define a pesquisa
  const handleSearch = async (event) => {
      event.preventDefault();
      // eslint-disable-next-line no-unused-vars
      const products = await fetchProducts(searchValue);
      setProducts(products);
      setSearchValue("");
  };

  return(
    //formulario de envio da pesquisa
    <form className="search-bar" onSubmit={handleSearch}>
      {/* tipo de input */}
    <input type="search" 
    value={searchValue}
      placeholder="Buscar produtos" 
      className="search__input" 
      //troca a pesquisa ao pesquisar outro item
      onChange={ ({target}) => setSearchValue(target.value) }
      required
    />
    {/* botão de pesquisa */}
      <button type="submit" className="search__button">
        <IoSearch />
      </button>
    </form>
  );
}

export default SearchBar;