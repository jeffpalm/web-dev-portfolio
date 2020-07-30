require('dotenv').config()
const express = require('express'),
	app = express(),
	path = require('path'),
	{ SERVER_PORT } = process.env

app.use(express.static(__dirname + '/../build'))

app.use(express.json())

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build/index.html'))
})

app.listen(SERVER_PORT, () => {
	console.log(`Servin and observin port: ${SERVER_PORT}`)
})
