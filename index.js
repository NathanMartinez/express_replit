const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// Middlewares 
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("tiny"));


const path = require('path')

app.use('/', express.static(path.join(__dirname, 'public')))

const port = 3000;

const Database = require("@replit/database")
const db = new Database()


// Get Requests
app.get('/', (req, res) => {

})

// Users Endpoint
app.get('/users', (req, res) => {
	res.send('Test')
})

// Post

app.post("/users", function(req, res) {
	console.log(req.body)
});

app.listen(port, console.log(`Server running on port: ${port}`));