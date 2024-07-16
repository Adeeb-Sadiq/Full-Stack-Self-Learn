import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // we cannot use variables as usual, when componenets re render, the value of variable does not persist and go back to initialization
  // let a =0 

  const a = useRef(0) // the value of a will persist across re renders 

  // another use case of useref
  const rr = useRef(); // add it to the button

  useEffect(()=> {
    a.current = a.current + 1;
    console.log(` rendering and value of a is ${a.current}`)
    rr.current.style.backgroundColor = "red"
  })



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref = {rr} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
