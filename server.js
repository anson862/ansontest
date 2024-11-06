const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve the form page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    // Process the data...
    
    // Redirect to result page
    res.redirect('/result');
});

// Serve the result page
app.get('/result', (req, res) => {
    res.sendFile(__dirname + '/public/result.html');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});