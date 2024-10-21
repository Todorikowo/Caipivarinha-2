/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    // State variables
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                alert('Login successful!');
                navigate('/', { replace: true }); // Redirect to the account page
            } else {
                setError('Invalid username or password.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Error during login.');
        }
    };

    return (
        // Container
        <div className="container-login">
            {/* Form */}
            <form onSubmit={handleSubmit}>
                <h1>Você por aqui?</h1>
                {error && <div className="error-message">{error}</div>}
                
                {/* Username input */}
                <div className="input-field">
                    <input
                        type="text"
                        placeholder="Nome de usuário"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <FaUser className="icon" />
                </div>
                
                {/* Password input */}
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FaLock className="icon" />
                </div>
                
                {/* Submit button */}
                <button type="submit">Entrar</button>

                {/* Sign up link */}
                <div className="signup-link">
                    <p>Não tem uma conta? <Link to="/register">Registre-se!</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;