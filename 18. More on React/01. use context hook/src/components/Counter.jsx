import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const Counter = () => {
    const value = useContext(counterContext)
  return (
    <div>
      count is {value.count}
    </div>
  )
}

export default Counter
