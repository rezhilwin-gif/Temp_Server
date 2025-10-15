const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log('Middleware running for every request');
    next(); // Pass control to the next middleware or route handler
});
// Another middleware specific to the "/about" route
app.use('/about', (req, res, next) => {
    console.log('Middleware for /about route');
    next(); // Passes control to the route handler
});
// Route handler for "/about"
app.get('/about', (req, res) => {
    res.send('This is the About page');
});
// Route handler for "/"
app.get('/', (req, res) => {
    res.send('Home Page');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

