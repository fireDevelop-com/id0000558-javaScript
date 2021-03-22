// for local files use    const http = require('./http')
const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req)
    process.exit() // shutdown the loop
})
server.listen(3000)