const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// Sample route for the health tracker
app.post('/track-health', (req, res) => {
    const { userId, fitnessData } = req.body;
    // Process the health data (save it in a database)
    res.status(200).json({ message: "Health data saved successfully" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});