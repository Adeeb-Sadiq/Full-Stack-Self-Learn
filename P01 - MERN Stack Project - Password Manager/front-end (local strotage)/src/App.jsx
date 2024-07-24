import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Passwords from "./components/Passwords"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/passwords",
      element: <><Navbar /><Passwords /></>
    }
  ])

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 to-blue-400 h-screen text-white overflow-scroll">
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
