import React from "react";
import "../styles/Pay.css"
import Code from "../assets/qrcode.png"
 
function Pay(){
    return(
        <div className="pagamento">
            <div className="container-pay">
                <h1>Obrigado pela sua compra!</h1>
                <img src={Code} alt="logo"/>
                <h2>Conclua o pagamento por pix escaneando o QRcode abaixo!</h2>
            </div>
        </div>
    )
}

export default Pay