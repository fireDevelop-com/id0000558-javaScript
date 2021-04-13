const http = require('http')
const express = require('express')
const app = exports()

app.use((req, res, next) => {
  console.log('one')
  next()
})

app.use((req, res, next) => {
  console.log('two')
  res.send('<p>hi</p>')
})

const server = http.createServer(app)
server.listen(3000)