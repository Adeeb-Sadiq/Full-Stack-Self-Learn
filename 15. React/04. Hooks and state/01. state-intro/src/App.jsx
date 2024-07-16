import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) // example of hooks 
  // hooks are functions that have access to state and other react features 

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => {setCount(count + 1)}}>Update the count</button>
    </>
  )
}

export default App
