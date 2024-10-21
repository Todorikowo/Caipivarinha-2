const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'crud', // Replace with your MySQL database name
});

// Connect to the database
db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// API endpoint to register a user
app.post('/api/register', (req, res) => {
    const { username, password, email } = req.body;

    // Ensure you hash passwords in a real application
    const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    
    db.query(query, [username, password, email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error occurred while registering user.');
        }
        res.status(201).send('Usuario cadastrado com sucesso.');
    });
});

// API endpoint to login a user
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    
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


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
