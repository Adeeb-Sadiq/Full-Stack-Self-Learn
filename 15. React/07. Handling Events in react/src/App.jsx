import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername] = useState("")

  const clicked = () => {
    setCount(count + 1)
  }
  
  const mousehover = () => {
    alert('mouse on blue box')
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
  }
  
  

  return (
    <>
      <button onClick={clicked}>click me {count}</button>
      <div onMouseOver={mousehover} className='blue'> i  am div</div>

      <input type="text" value={username} onChange={handleChange}/>
    </>
  )
}

export default App
