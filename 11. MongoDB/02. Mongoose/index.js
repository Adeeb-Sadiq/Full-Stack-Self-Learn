import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

await mongoose.connect("mongodb://localhost:27017/todo")

const app = express()
const port = 3000

app.get('/', (req, res) => {
    // const todo = new Todo({title: "This is a todo", isDone: false})
    // todo.save();
    // console.log(todo.title);
    res.send('Hello World!')
})

app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    res.json(todo)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})