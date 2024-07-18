import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>About</li>
          <li><Link to="/login">Login</Link></li>
          <li><NavLink className={e => e.isActive?"active": ""} to="/user/Adeeb">User</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
