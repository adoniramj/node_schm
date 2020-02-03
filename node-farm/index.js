const http = require('http')
const fs = require('fs')
const httpStatus = require('http-status-codes')

const port = 3000

const apiData = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')

const app = http.createServer((req, res) => {
  const header = res.writeHead(httpStatus.OK, { 'Content-Type' : 'text/html', 'Personal' :'testing the header'})
  const pathName = req.url

  if(pathName === '/' ||pathName === '/overview') {
    header
    res.end('Hello from the overview page')
  } else if (pathName === '/product') {
    header
    res.end('This is the product page')
  } else if (pathName === '/api') {
      res.writeHead(httpStatus.OK, { 'Content-Type' : 'application/json'})
      res.end(apiData)
  } else {
    res.writeHead(httpStatus.NOT_FOUND, { 'Content-Type' : 'text/html'})
    res.end('page not found')
  }
})

app.listen(port)
