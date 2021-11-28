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
app.use(express.static('public'));

const port = 3000;

const Database = require("@replit/database")
const db = new Database()

app.get('/', (req, res) => {
	res.sendFile(process.cwd() + '/public/index.html');
})
app.get('/users', (req, res) => {
	// res.sendFile(process.cwd() + '/public/index.html');
	res.send('Hello World!')
})

app.post("/users", function(req, res) {
	console.log(req.body)
});

app.listen(port, console.log(`Server running on port: ${port}`));