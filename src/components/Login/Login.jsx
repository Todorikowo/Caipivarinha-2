import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    // Variaveis de estado
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // impede a pagina de reiniciar ao enviar o formulário
    const handleSubmit = async (event) => {
        event.preventDefault();

        //conecta ao BD
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            //se resposta para o check for ok, avisa sobre login e manda para a home, senão invalida
            if (response.ok) {
                alert('Login successful!');
                navigate('/', { replace: true });
            } else {
                alert('Invalid username or password.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error during login.');
        }
    };

    return (
        // Container
        <div className="container-login">
            {/* Formulário */}
            <form onSubmit={handleSubmit}>
                <h1>Você por aqui?</h1>
                {error && <div className="error-message">{error}</div>}
                
                {/* Input do nome de usuario */}
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                </div>
                
                {/* Input da senha */}
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className="icon" />
                </div>
                
                {/* Botão de enviar */}
                <button type="submit">Entrar</button>

                {/* Link para o registro */}
                <div className="signup-link">
                    <p>Não tem uma conta? <Link to="/registro">Registre-se!</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;