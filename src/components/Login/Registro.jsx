import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

//consts
const Registro = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    //previne o reinicio pós envio
    const handleSubmit = async (event) => {
        event.preventDefault();

        //confirma a senha
        if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }

        //conecta ao BD
        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, email }),
            });

            //se tudo certo, cadastra, senão msg de erro
            if (response.ok) {
                alert('Usuário cadastrado com sucesso!');
                navigate('/conta', { replace: true });
            } else {
                alert('Erro ao cadastrar usuário.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Erro ao cadastrar usuário.');
        }
    };

    return (
        <div className="container-login">
            {/* formulário registro */}
            <form onSubmit={handleSubmit}>
                <h1>E quem é você?</h1>
                {error && <div className="error-message">{error}</div>}
                {/* input nome */}
                <div className="input-field">
                    <input 
                        type="text" 
                        placeholder="Nome:" 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                        aria-label="Nome"
                    />
                    <FaPerson className="icon" />
                </div>
                {/* input email */}
                <div className="input-field">
                    <input 
                        type="email" 
                        placeholder="E-mail:" 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        aria-label="E-mail"
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-field">
                    {/* input senha */}
                    <input 
                        type="password" 
                        placeholder="Senha:" 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        aria-label="Senha"
                    />
                    <FaLock className="icon" />
                </div>
                <div className="input-field">
                    {/* input confirme a senha */}
                    <input 
                        type="password" 
                        placeholder="Confirme a senha:" 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                        aria-label="Confirme a senha"
                    />
                    <FaLock className="icon" />
                </div>
                {/* botão cadastrar */}
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Registro;