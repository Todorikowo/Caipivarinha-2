import React from "react";
import { Link } from "react-router-dom";
import caip from "../assets/caip-let.PNG";
import BannerImage from "../assets/pubbg.jpg";
import "../styles/Home.css";
// função home
function Home(){
    return(
        // imagem fundo pub
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            {/* caipivarinha em cursiva */}
            <img src={caip} alt="caip"/>
            <div className="headerContainer">
                {/* frase de efeito */}
                <p>Porque a vida é muito curta pra beber só um copo.</p>
                <Link to={"/carrinho"}>
                {/* outro botão do carrinho */}
                    <button>PEÇA AQUI</button>
                </Link>  
            </div>
        </div>
    )
}

export default Home;