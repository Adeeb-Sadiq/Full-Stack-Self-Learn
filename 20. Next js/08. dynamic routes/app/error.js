"use client"
import React from 'react'

const error = ({error, reset}) => {
  return (
    <div>
      <div className='flex flex-col items-center gap-4'>
        <h2>SOMETHING WENT WRONG</h2>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  )
}

export default error
