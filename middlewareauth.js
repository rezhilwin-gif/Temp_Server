const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
// Hardcoded username and password
const USERNAME = 'admin';
const PASSWORD = 'password123';
// Simple Authentication Middleware
const authenticate = (req, res, next) => {
    const { username, password } = req.body;
    // Check if username and password match the hardcoded values
    if (username === USERNAME && password === PASSWORD) {
        console.log('Authenticated successfully');
        next(); // Proceed to the next middleware/route handler
    } else {
        res.status(401).send('You are not authenticated!');
    }
};

// Protected Route (requires authentication)
app.post('/protected', authenticate, (req, res) => {
    res.send('You have access to the protected route!');
});
// Unprotected Route (accessible without authentication)
app.get('/', (req, res) => {
    res.send('Welcome to the public route!');
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
