//1.    npm install --save express
//2.    npm install --save-dev nodemon
//3.    add to package.json the next line under script: 
//         "start": "nodemon.js"


const http = require('http')
const express = require('express')
const app = express()

app.use('/add-product',(req, res, next) => {
    console.log('add product')
    res.send('add product')
})
app.use('/delete-product',(req, res, next) => {
    next()
})
app.use('/delete-product',(req, res, next) => {
    console.log('delete-product')
    res.send('delete-product2')
})

app.use('/',(req, res, next) => {
    console.log('one')
    next()
})

app.use('/', (req, res, next) => {
    console.log('three')
    res.send('hi 3')
})


const server = http.createServer(app)
app.listen(3000)