const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.post('/', (req, res) => {
    console.log("this is a post request");
    res.send('Hello World post');
})
// similarly to put delete ... 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})