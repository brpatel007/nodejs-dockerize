const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
	return res.send('Your Node.js app is running!')
})

app.listen(3000, () => {
	console.log('Server is listening on port 3000')
})
