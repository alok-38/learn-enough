const express = require('express');
const app = express();
const port = 3000;

// Dummy data
const data = ['Item 1', 'Item 2', 'Item 3'];

// Middleware to handle JSON requests
app.use(express.json());

// Define a route handler for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the web app!');
});

// API endpoint to get data
app.get('/api/data', (req, res) => {
    res.json(data);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});