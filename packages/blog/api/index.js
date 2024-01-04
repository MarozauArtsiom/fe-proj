// Import the http module
const mockData = require('./mock');
const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/api/data', (req, res) => {
    res.send(mockData);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});