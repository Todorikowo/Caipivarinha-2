import React, { useEffect, useContext } from "react";

import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import AppContext from "../../Context/AppContext";

function Products(){

  //constantes
 const {products, setProducts} = useContext(AppContext);

//  procura os produtos
  useEffect(() => {

    fetchProducts("bebida").then((response) => {
      setProducts(response);
    });

  }, [setProducts]);

  //armazena os produtos e as informações em map para exportar
  return(
    <section className="products container">
      {
        products.map((product) => <ProductCard key={product.id} data={product} />)
      }
    </section>
  );
}

export default Products;