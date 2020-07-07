require('dotenv').config()
const express = require('express'),
  app = express(),
  {SERVER_PORT} = process.env

app.use(express.static(__dirname + '/../build'))

app.use(express.json())

app.listen(SERVER_PORT, () => {
  console.log(`Servin and observin port: ${SERVER_PORT}`)
})