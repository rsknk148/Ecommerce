const express = require('express');
const db = require('./db'); // Import the connection

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
