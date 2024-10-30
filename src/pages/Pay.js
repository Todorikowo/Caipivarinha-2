import React, { useContext } from "react";
import AppContext from "../Context/AppContext";

//WIP
function Pay(){

    const { totalPrice } = useContext(AppContext);

    return(
        <div className="container">
        Preço total: {totalPrice.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
        </div>
    )
}

export default Pay