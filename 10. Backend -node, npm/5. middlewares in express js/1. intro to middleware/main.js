const express = require('express')
const app = express()
const port = 3000

// example of middleware
app.use(express.static("public"))

// middleware 1
app.use((req, res, next) => {
    console.log("In middleware one");
    next() 
})
// next() is used to transfer the request control to next middleware or router 
// or else req just gets stuck 

// middleware 2
app.use((req, res, next) => {
    console.log("In middleware 2");
    res.send("Interupted by middleware 2") // once res is sent, it wont execute further 
    // next() 
    // next wont work after the res is sent 
})
// since the res is sent, following routes cannot be accessed 


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello About!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})