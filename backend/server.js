const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Import the user routes

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRoutes); // Use the routes under the /api prefix

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
