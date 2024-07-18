import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")

  useEffect(() => {
    if(localStorage.getItem("newTodos")){
      let newTodos = localStorage.getItem("newTodos")
      newTodos = JSON.parse(newTodos)
      setTodos(newTodos)
    }
  }, [])
  

  const saveToLocalStorage = (newTodos) => {
    localStorage.setItem('newTodos', JSON.stringify(newTodos))
  }
  

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleAdd = () => {
    let newTodos = [...todos, { id: uuidv4(), task: todo, isCompleted: false }]
    setTodos(newTodos)
    setTodo("")
    saveToLocalStorage(newTodos)
  }

  const handleDone = (e, id) => {
    let index = todos.findIndex(item => {
      return item.id === id
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLocalStorage(newTodos)
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLocalStorage(newTodos)
  }

  const handleEdit = (e, id) => {
    let index = todos.findIndex(item => {
      return item.id === id
    })
    setTodo(todos[index].task)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLocalStorage(newTodos)
  }


  return (
    <div className='w-screen h-screen bg-neutral-100'>
      <header className='p-3 font-bold text-2xl bg-sky-700 text-white flex justify-center'>Task Manager</header>

      {/* container */}
      <div className="box flex justify-center m-2">

        {/* Render todos here  */}
        <div className='p-3 rounded-xl bg-white w-full sm:w-96'>

          <div className='section1'>
            <div className='font-bold text-xl'>Add A Todo</div>
            <div className='flex justify-between gap-1'>
              <input onChange={handleChange} value={todo} className='p-1 outline-none text-lg w-full' type="text" placeholder="What's next" />
              <button onClick={handleAdd} disabled = {todo.length<1} className='text-lg bg-sky-700 text-white px-3 rounded-full py-px hover:bg-sky-800'>Save</button>
            </div>
          </div>

          <div className="section2">
            <div className='font-bold text-xl'>Your Todos:</div>
            {todos.length === 0 && <div className='text-md w-full px-1 italic'>Start Adding Your Tasks</div>}
            {todos.map(item => {
              return (
                <div key={item.id} className='todo flex justify-between items-center my-2 gap-2'>
                  <div className='flex items-center gap-3 w-full'>
                    <input onChange={(e) => {handleDone(e, item.id)}} type="checkbox" name="" id="" checked={item.isCompleted} />
                    <div className='text-lg w-full'>
                      <div className={item.isCompleted?"line-through":""} >{item.task}</div>
                      </div>
                  </div>
                  <div className='flex gap-1 items-center'>
                    <button onClick={e => handleEdit(e, item.id)} className='text-lg bg-sky-700 text-white px-3 rounded-full py-px hover:bg-sky-800'>Edit</button>
                    <button onClick={e => handleDelete(e, item.id)} className='text-lg bg-sky-700 text-white px-3 rounded-full py-px hover:bg-sky-800'>Delete</button>
                  </div>
                </div>
              )
            })}


          </div>
        </div>


      </div>
    </div>
  )
}

export default App
