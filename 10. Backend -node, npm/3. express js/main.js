const express = require('express')
const app = express()
const port = 3000

// syntax
// app. get, .post, .put, .delete
// (path, handler)

////////////////////////////////////////
// how end points works 
app.get('/', (req, res) => {
    res.send("Server is running!")
    // console.log(res);
})

app.get('/about', (req, res) => {
    res.send("About us page")
})

app.get('/about/contact', (req,res) => {
    res.send('Contact information!!!')
})
////////////////////////////////////////

// url parameters
app.get('/:slug/:second', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`using parameter ${req.params.slug}`)
})

// queries 
// in url example : ?mode=dark&region=asia


// static files
// all this files are not seen to users for securing the backend code by express 
// static files can be used to make the file available to users 

app.use(express.static('public'))
// now u can use /demo.txt to view the file on browser








app.listen(port, () => {
    console.log('Example app listening on port ' + port);
})


