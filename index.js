
const express = require('express');
const connectDB = require('./database'); // Import the connection function

const app = express();

// Call the connectDB function
connectDB();

// Your server setup (routes, middleware, etc.) goes here

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});