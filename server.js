const express = require('express'); const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
// Add this middleware to parse JSON bodies
app.use(express.json());
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
];
app.get('/', (req, res) => {
    res.send("<h1> SASTRA UNIVERSITY </h1>");
});
app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('parameters')
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});


app.post('/users', (req, res) => {
    const { id, name, email } = req.body;
    console.log(id, name, email);
    const newUser = { id, name, email };
    users.push(newUser);
    res.json({ message: 'User added successfully!', user: { newUser } });
});

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name } = req.body;
    const userIndex = users.findIndex(b => b.id === userId);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], id: userId, name };
        res.json({ message: 'user updated successfully!', user: users[userIndex] });
    } else {
        res.status(404).json({ message: 'user not found' });
    }
});

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(b => b.id === userId);
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.json({ message: 'User deleted successfully!' });
    } else {
        res.status(404).json({ message: 'user not found' });
    }
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    //console.log(users);
});
