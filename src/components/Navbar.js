import React, {useState} from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import "../styles/Navbar.css";

// função navbar
function Navbar(){
    // constante do menu celular
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    // navbar
    return(
        <div className="navbar">
            {/* nome da classe e id para abrir e fechar o menu cel */}
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                {/* logo */}
                <Link to="/"><img src={logo} alt="logo"/></Link>
                <div className="hiddenLinks">
                    {/* links do menu cel */}
                    <Link to={"/"}>Home</Link>
                <Link to={"/carrinho"}>Cardápio</Link>
                <Link to={"/sobre"}>Sobre Nós</Link>
                <Link to={"/conta"}><IoPersonCircleOutline /></Link>
                </div>
            </div>
            {/* links */}
            <div className="rightSide">
                <Link to={"/"}>Home</Link>
                <Link to={"/carrinho"}>Cardápio</Link>
                <Link to={"/sobre"}>Sobre Nós</Link>
                <Link to={"/conta"}><IoPersonCircleOutline /></Link>
                {/* abre e fecha o menu cel */}
                <button onClick={toggleNavbar}><FaBars /></button>
            </div>
        </div>
    )
}

export default Navbar;