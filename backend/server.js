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

// Dummy user for demonstration (in real scenarios, use a database)
const users = [
    { email: 'test@example.com', password: 'password123' } // Replace this with actual users from your database
];

// Route to handle the login form submission
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Find the user in the database
    const user = users.find(u => u.email === email && u.password === password);

    // Validate login credentials
    if (!user) {
        return res.status(400).send('Invalid email or password');
    }

    // Successful login (You could set a session or return a JWT token here)
    res.status(200).send('Login successful! Redirecting...');
});

