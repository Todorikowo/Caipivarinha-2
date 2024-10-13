/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Login.css"
import { useState } from "react";
import {FaUser, FaLock} from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");  

    const handleSubmit = () => {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
        alert("Enviando os dados:" + username + " - " + password);
    };

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Você por aqui?</h1>
                <div className="input-field">
                    <input type="email" placeholder="E-mail:" onChange={(e) => setUsername(e.target.value)} required />
                    <FaUser className="icon"/>
                </div>
                <div className="input-field">
                    <input type="password" placeholder="Senha:" onChange={(e) => setPassword(e.target.value)} required/>
                    <FaLock className="icon"/>
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>

                    <Link to="/"><button>Entrar</button></Link>

                <div className="signup-link">
                    <p>Não tem uma conta? <a href="/registro">Registre-se!</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;