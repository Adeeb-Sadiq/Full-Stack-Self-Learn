import { useState, useEffect } from 'react'
import {v4 as uuid} from 'uuid'

function App() {

  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [showchecked, setShowchecked] = useState(true)

  useEffect(() => {
    if(localStorage.getItem("todos")){
      let ts = JSON.parse(localStorage.getItem("todos"))
      setTodos(ts)
    }
  }, [])
  
  const saveLS = (newtodos) => {
    localStorage.setItem("todos", JSON.stringify(newtodos))
  }
  
  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleAdd = () => {
    if(todo === "" || todo === null){
      alert('Task is empty')
    } else {
      const newtodos = [...todos, {id:uuid(), todo, isCompleted: false }]
      setTodos(newtodos)
      setTodo("")
      saveLS(newtodos)
    }
  }

  const handleDelete = (e, id) => {
    let newtodos = todos.filter(item=> {
      return item.id !== id
    })
    setTodos(newtodos)
    saveLS(newtodos)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newtodos = [...todos]
    newtodos[index].isCompleted = !newtodos[index].isCompleted
    setTodos(newtodos)
    saveLS(newtodos)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(item => item.id === id)
    setTodo(t[0].todo)
    let newtodos = todos.filter(item=> {
      return item.id !== id
    })
    setTodos(newtodos)
    saveLS(newtodos)
  }

  const toggleShowChecked = () => {
    setShowchecked(!showchecked)    
  }
  

  return (
    <div className='w-screen h-screen bg-zinc-100'>
      <nav className='p-3 bg-indigo-500 text-white flex justify-center font-bold text-2xl'>Task Manager</nav>

      <div className='p-3 m-auto my-7 flex flex-col gap-5 border-2 border-black rounded-xl bg-white w-full sm:w-4/5 md:w-2/3 lg:w-3/4 xl:w-1/2'>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold'>Add A Todo:</h2>

          <div className='flex gap-4 justify-between'>
            <input onChange={handleChange} value={todo} type="text" className='outline-none p-px w-3/4 focus:outline-indigo-500 bg-inherit text-lg rounded-lg' placeholder="Whats's next" />
            <button onClick={handleAdd} className='bg-indigo-500 text-white px-3 py-1 rounded-md font-bold'>Save</button>
          </div>
        </div>

        <div className='flex gap-3 text-lg'>
          <input onChange={toggleShowChecked} type="checkbox" checked = {showchecked} /><span>Show checked</span>
        </div>

        <div className='flex flex-col gap-3'>
          <h2 className='text-2xl font-bold'>Your Todos:</h2>

          <div className="todos flex flex-col gap-3">
            {todos.length === 0 && <div className='text-xl'>Start adding Tasks</div>}

            {todos.map(item => { return( (showchecked || !item.isCompleted) &&
              <div key={item.id} className="todo flex justify-between items-center">
                <div className='flex gap-2 w-3/4 text-xl overflow-hidden'>
                  <div><input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} /></div>
                  <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
                </div>

                <div className='flex gap-2'>
                  <button onClick={(e) => handleEdit(e, item.id)} className='bg-indigo-500 text-white px-3 py-1 rounded-md font-bold'>Edit</button>
                  <button onClick={(e) => handleDelete(e,item.id)} className='bg-indigo-500 text-white px-3 py-1 rounded-md font-bold'>Delete</button>
                </div>
              </div>
            )})}

          </div>

        </div>

      </div>

    </div>
  )
}

export default App
