const http = require('http')
const hostname = '127.0.0.1'
const port = 3003

const responseJson = {
  success: true,
  canIgetCoffee: false,
  responseCode: 0123
}

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(responseJson))
})

server.listen(port, hostname, () => {
  console.log('Servidor corriendo!!!')
})