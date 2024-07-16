import React from 'react'
import './cards.css'

const card = (props) => {
  return (
    <div className='Card'>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default card
