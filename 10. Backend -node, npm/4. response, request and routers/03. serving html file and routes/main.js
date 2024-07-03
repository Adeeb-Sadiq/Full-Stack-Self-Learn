const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use('/blog', blog)

app.get('/', (req, res) => {
  res.send('Hello World get on postman!')
})

app.post('/', (req, res) => {
  res.send('Hello World post on postman!')
})

app.get('/index', (req, res) => {
    res.sendFile('templates/index.html', {root: __dirname})
})

app.get('/api', (req, res) => {
    res.json({1: "a" , 2 : "b" , nan : ["code", "express", "node"]})
})
// more - res. - redirect, download, sendstatus, render, end ... 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
