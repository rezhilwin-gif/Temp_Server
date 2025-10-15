const express = require('express');
const session = require('express-session');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(session({
    secret: 'secret123',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));

// Dummy user credentials
const USER = { username: 'user', password: '1234' };

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === USER.username && password === USER.password) {
        req.session.user = username;
        res.json({ success: true, message: 'Login successful!' });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

// Check session
app.get('/session', (req, res) => {
    if (req.session.user) {
        res.json({ loggedIn: true, user: req.session.user });
    } else {
        res.json({ loggedIn: false });
    }
});

// Logout route
app.post('/logout', (req, res) => {
    req.session.destroy();
    res.json({ success: true, message: 'Logged out successfully' });
});

app.listen(5000, () => console.log('✅ Server running on http://localhost:5000'));
