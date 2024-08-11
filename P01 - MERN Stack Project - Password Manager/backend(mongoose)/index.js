import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { Password } from './models/passwordModel.js'

const PORT = 3100
const dataBase = 'newPassManager'
const mongourl = `mongodb://localhost:27017/${dataBase}`
const app = express()

mongoose.connect(mongourl).then(() => { console.log("connection success") })

app.use(cors())
app.use(express.json())

// get all the passwords 
app.get('/', async (req, res) => {
    try {
        const passwords = await Password.find({})
        res.json(passwords)
    } catch (error) {
        console.log('error', error)
    }
})

// add a password
app.post('/', async (req, res) => {
    try {
        if (!req.body.username || !req.body.url || !req.body.password) {
            return res.send('All fields required')
        }

        const newPass = {
            id: req.body.id,
            username: req.body.username,
            url: req.body.url,
            password: req.body.password
        }

        const password = await Password.create(newPass)
        return res.send(password)
    } catch (error) {
        console.log('error', error)
    }

})

// delete a password
app.delete('/', async (req, res) => {
    try {
        const { id } = req.body
        console.log(id)
        const result = await Password.deleteOne({id: id})
        if (!result) {
            return res.json('password not found')
        }
        res.json({ message: 'password deleted' })
    } catch (error) {
        console.log('error', error)
    }

})

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`)
})