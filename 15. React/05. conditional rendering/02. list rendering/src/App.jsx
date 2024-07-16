import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [todos, setTodos] = useState([
    {
      title: "Gym",
      desc: "Go to gym at 6am"
    },
    {
      title: "Project",
      desc: "Finish the project within 3 days"
    },
    {
      title: "Learn",
      desc: "Learn react and next js"
    },
    {
      title: "Grocery",
      desc: "Get grocery at evening"
    }

  ])

  const Todo = (props) => {
    return (
      <>
      <div className="todo text-xl border-2 p-2 rounded-xl m-2">
        {props.title} - {props.desc}
      </div>
      </>
    )
  }

  return (
    <>
    {todos.map(todo=>{
      return <Todo key = {todo.title} title = {todo.title} desc = {todo.desc}/>
    })}     

    </>
  )
}

export default App
