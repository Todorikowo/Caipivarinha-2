const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

//  Conexão MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'crud', // Replace with your MySQL database name
});

// Conecta ao BD
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Endpoint da API para cadastrar usuario
app.post('/api/register', (req, res) => {
    const { username, password, email } = req.body;

    // Cadastra o usuario na tabela
    const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    
    //Valida o cadastro
    db.query(query, [username, password, email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error occurred while registering user.');
        }
        res.status(201).send('Usuario cadastrado com sucesso.');
    });
});

// Endpoint da api para logar o usuario
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    //acha o usuario na tabela
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    
    //confirma o login, senão envia erro
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error occurred while logging in.');
        }

        if (results.length > 0) {
            // User found, login successful
            res.status(200).send('Login successful!');
        } else {
            // User not found
            res.status(401).send('Invalid username or password.');
        }
    });
});


// Começa o servidor
app.listen(PORT, () => {
    console.log(`Servidor hospedado em: http://localhost:${PORT}`);
});
