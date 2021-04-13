/*

0.  if you install new package you need to reboot node:
        npm start

1.    npm install --save express

2.    npm install --save-dev nodemon

3.    add to package.json the next line under script: 
        "start": "nodemon.js"

4.  install the next comand for see req.body:
        npm install --save body-parser
bodyParse allow extrar the value added by users easly like: {Title: My }

*/

const http = require('http')
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button></form></body>')
})

app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    res.send('hello')
})


const server = http.createServer(app)
app.listen(3000)