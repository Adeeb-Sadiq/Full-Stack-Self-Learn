import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const count = useSelector(state => state.counter.value)
  return (
    <div>
      This is a Navbar and value is {count}
    </div>
  )
}

export default Navbar
