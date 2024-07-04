const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000


// middleware 1 - logger for the application
app.use((req, res, next) => {
    console.log(`${req.method} on ${Date.now()}`);
    fs.appendFileSync("logs.txt", `${req.method} on ${Date.now()}\n`)
    next()
})

// middleware 2 - modifying the request header
app.use((req,res,next) => {
    console.log(req.headers);
    req.greet = " Welcome to the website"
    next()
})


app.get('/', (req, res) => {
  res.send('Hello World!' + req.greet)
})

app.get('/about', (req, res) => {
  res.send('Hello About!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})