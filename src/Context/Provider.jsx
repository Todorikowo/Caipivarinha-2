import React, { useState } from "react";
import propTypes from "prop-types";
import AppContext from "./AppContext";

function Provider({ children }) {

  //provede constantes para exportação
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [totalPrice] = useState([])
  
  const value = {
    products, 
    setProducts,
    cartItems, 
    setCartItems,
    isCartVisible, 
    setIsCartVisible,
    totalPrice
  };
// exporta as constantes
  return(
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;
Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
