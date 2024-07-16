import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showbtn, setshowbtn] = useState(false)

  // small component within a component
  const Todo = () => {
    return(
      <>
        <div style={{margin: "30px"}}>This is a todo component</div>
      </>
    )
  }

  return (
    // example of conditional rendering :
    <>
      <Todo />
      <div>
        {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
      </div>
      <div>
        {showbtn && <button>showbtn is true</button>}
      </div>
      <div>
        <button style={{margin: "10px"}} onClick={() => {setshowbtn(!showbtn)}}>Toggle button</button>
      </div>
    </>
  )
}

export default App
