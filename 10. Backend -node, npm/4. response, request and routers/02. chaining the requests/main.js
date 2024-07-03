const express = require('express')
const app = express()
const port = 3000

// chaining the request
app.get('/', (req, res) => {
    res.send('Hello World! get')
}).post('/', (req, res) => {
    res.send('Hello World! post')
}).put('/', (req, res) => {
    res.send('Hello World! put')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
