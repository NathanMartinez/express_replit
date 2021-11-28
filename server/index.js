const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require('path')

// Server port
const PORT = 5000;

// Middlewares 
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));

// Set up public folder
app.use('/', express.static(path.join(__dirname, '../public')))

// Start server
app.listen(PORT, console.log(`Server running on port: ${PORT}`));

module.exports = app