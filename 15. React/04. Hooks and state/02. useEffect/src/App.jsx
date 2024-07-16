import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  // in development (not durinng production), the app runs twice, once check and once normal, so we can see useeffects twice during development 
  // we can check in main.jsx - strict mode is on , turn off to avoid seeing use effect twice - (not recommended)
  useEffect(() => {
    // alert("This is the entry point of the app")
  }, []) // runs only on first render 

  useEffect(() => {
    alert("Count was changed")
  }, [count]) // runs when count changes

  // this runs on every render
  // useEffect(() => {
  //   alert("Runs on every render")
  // }) // no array



  return (
    <>
      <Navbar />
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
        <button onClick={() => setCount((count) => count + 1)}>
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
