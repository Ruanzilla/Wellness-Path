// In server.js (or your backend file)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle the signup form submission
app.post('/signup', (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // Basic validation
    if (!name || !email || !password || password !== confirmPassword) {
        return res.status(400).send('Validation error: Please ensure all fields are filled and passwords match.');
    }

    // Here you would save the user to the database
    // For example, using a dummy message for now
    res.status(200).send('Account created successfully!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});