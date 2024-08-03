const express = require('express'); // Import Express
const app = express(); // Create an Express application

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!'); // Send a response
});

// Define the port number
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});