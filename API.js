require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date()}`);
    next();
});

app.get('/', (req, res) => {
    res.send('My Week 2 API!');
});

app.post('/user', (req, res) => {
    const { name, email } = req.body;
    if (!name) return res.status(400).send('Name is required!');
    if (!email) return res.status(400).send('Email is required!');
    res.json({ user: req.body });
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID requested: ${userId} profile`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
