const express = require('express')
const mongoose = require('mongoose')
const Employee = require('./models/Employee')

mongoose.connect('mongodb://localhost:27017/Employees')

const app = express()
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/generate', async (req, res) => {
  enames = ['Sam', 'Harry', 'Jack', 'Peter', 'Tony']
  elangs = ['Python', 'Java', 'C++', 'C', 'GoLang']
  ecities = ['London', 'New York', 'Bangalore', 'Paris', 'Manchester']
  esalary = Math.random() * (600000 - 60000) + 60000;
  
  let e = await Employee.create({
    name: enames[Math.floor(Math.random() * (6 - 1) + 1)],
    salary: esalary,
    language: elangs[Math.floor(Math.random() * (6 - 1) + 1)],
    city: ecities[Math.floor(Math.random() * (6 - 1) + 1)]
  })
  res.send('added')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})