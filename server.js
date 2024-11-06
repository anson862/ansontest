const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from 'public' directory
app.use(express.static('public'));

// Route for the form page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const data = req.body;
    // Process the data
    res.json({
        message: 'Form received!',
        data: data
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});