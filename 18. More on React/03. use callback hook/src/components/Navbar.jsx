import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective, getadjective}) => {
    console.log('Navbar is rendering')
  return (
    <div>
      I am a {adjective} Navbar {getadjective}
    </div>
  )
}

export default memo(Navbar)
