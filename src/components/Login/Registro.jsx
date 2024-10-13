/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {FaUser, FaLock} from "react-icons/fa";
import { GiJusticeStar } from "react-icons/gi";
import { FaPerson } from "react-icons/fa6";
const Registro = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");  
    const [email, setEmail] = useState(""); 
    const [CPF, setCPF] = useState("00000000000"); 

    const handleSubmit = () => {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
        alert("Enviando os dados:" + username + " - " + password + " - " + email + " - " + CPF);
    }; 

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>E quem é você?</h1>
                <div className="input-field">
                    <input type="text" id="CPF" placeholder="CPF:" onChange={(e) => setCPF(e.target.value)} required/>
                    <GiJusticeStar className="icon"/>
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Nome:" onChange={(e) => setUsername(e.target.value)} required/>
                    <FaPerson className="icon"/>
                </div>
                <div className="input-field">
                    <input type="email" placeholder="E-mail:" onChange={(e) => setEmail(e.target.value)} required/>
                    <FaUser className="icon"/>
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Senha:" onChange={(e) => setPassword(e.target.value)} required/>
                    <FaLock className="icon"/>
                </div>

                    <Link to="/conta">
                        <button>Cadastrar-se</button>
                    </Link>
            </form>
        </div>
    );
};

export default Registro;