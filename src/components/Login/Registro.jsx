/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import {FaUser, FaLock, FaCalendarAlt} from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
const Registro = () => {

    // constantes
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");  
        const [date, setDate] = useState("");
    const [email, setEmail] = useState(""); 

    // constante envio
    const handleSubmit = () => {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
        alert("Enviando os dados:" + username + " - " + password + " - " + email + " - " + date);
    }; 

    return(
        // continer
        <div className="container-login">
            <form onSubmit={handleSubmit}>
                <h1>E quem é você?</h1>
                {/* nome */}
                <div className="input-field">
                    <input type="text" placeholder="Nome:" onChange={(e) => setUsername(e.target.value)} required/>
                    <FaPerson className="icon"/>
                </div>
                {/* data de nascimento */}
                <div className="input-field">
                    <input type="date" placeholder="Data de nascimento:" onChange={(e) => setDate(e.target.value)} required/>
                    <FaCalendarAlt className="icon"/>
                </div>
                {/* email */}
                <div className="input-field">
                    <input type="email" placeholder="E-mail:" onChange={(e) => setEmail(e.target.value)} required/>
                    <FaUser className="icon"/>
                </div>
                {/* senha */}
                <div className="input-field">
                    <input type="password" placeholder="Senha:" onChange={(e) => setPassword(e.target.value)} required/>
                    <FaLock className="icon"/>
                </div>
                {/* confirma a senha */}
                <div className="input-field">
                    <input type="password" placeholder="Confirme a senha:" onChange={(e) => setPassword(e.target.value)} required/>
                    <FaLock className="icon"/>
                </div>
                    {/* botão cadastro */}
                    <Link to="/conta">
                        <button>Cadastrar-se</button>
                    </Link>
            </form>
        </div>
    );
};

export default Registro;