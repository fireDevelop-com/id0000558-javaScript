// for local files use    const http = require('./http')
const http = require('http')

const server = http.createServer((req, res) =>{
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>my first page</title><p>hello</p></head>')
    res.write('</html>')
    res.end()
})

server.listen(3000)