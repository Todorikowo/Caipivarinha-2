import React from "react";
import "../styles/About.css";
import caip from "../assets/caip.png";
import BannerImage from "../assets/barbg.jpg"

// função sobre
function About(){
    return(
        <div className="about">
            {/* img no topo do body */}
            <div className="aboutTop" style={{backgroundImage: `url(${BannerImage})`}}></div>
             {/* sobre */}
            <div className="aboutBottom">
            <h1> Bem-vindo à Caipivarinha, sua nova referência em bebidas!</h1>
                <p>
                    Fundada em 2024, nossa missão é transformar a maneira como você desfruta dos seus momentos de celebração. Oferecemos uma ampla seleção de bebidas, desde vinhos sofisticados até suas cervejas favoritas. Com um compromisso com a qualidade e a rapidez, garantimos que cada pedido chegue até você com a mesma frescura e sabor que você esperaria da loja. Descubra a facilidade de comprar bebidas online e aproveite cada ocasião com um toque especial.
                </p>
                {/* capivara com cerveja :D */}
            <img src={caip} alt="" />
            </div>
        </div>
    )
}

export default About