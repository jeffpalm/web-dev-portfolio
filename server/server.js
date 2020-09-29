require('dotenv').config()
const express = require('express'),
  app = express(),
  {SERVER_PORT} = process.env

app.use(express.static(__dirname + '/../build'))

app.use(express.json())

app.get('/resume', (req, res) => {
	res.redirect('https://docs.google.com/document/d/1sbfqaDbpB-eU6_msyee5EG3dvjhqumk0ahWBhAdxKmc/edit?usp=sharing')
})

app.listen(SERVER_PORT, () => {
  console.log(`Servin and observin port: ${SERVER_PORT}`)
})
