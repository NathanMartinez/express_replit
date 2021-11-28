const app = require('../index')

app.get('/users', (req, res) => {
	res.send('Test')
})

app.post("/users", function(req, res) {
	console.log(req.body)
});