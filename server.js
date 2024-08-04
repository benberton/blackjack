const express = require('express'); // Import Express
const app = express(); // Create an Express application
const path = require('path');


app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
    // Serve the HTML file
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define the port number
const PORT = 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});