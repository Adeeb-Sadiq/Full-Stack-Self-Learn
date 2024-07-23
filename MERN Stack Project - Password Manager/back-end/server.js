const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb')
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config();

const url = 'mongodb://localhost:27017/'
const client = new MongoClient(url);

const dbName = "secureByte"

const app = express()
const port = 3000

app.use(bodyparser.json())
app.use(cors())

client.connect();

app.get('/', async (req, res) => {
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const finalResult = await collection.find({}).toArray();
    res.json(finalResult)
})

app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const finalResult = await collection.insertOne(password)
    res.json({sucess:true})
})

app.delete('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const finalResult = await collection.deleteOne(password)
    res.json({sucess:true})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})