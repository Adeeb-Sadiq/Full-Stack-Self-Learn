import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex p-5 justify-between items-center flex-col sm:flex-row xl:w-[1280px] xl:m-auto transition-all'>
            <div className="logo text-2xl font-bold">SecureByte</div>
            <div className='flex items-center'>
                <ul className='flex gap-3 mx-2 items-center'>
                    <li className='cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='cursor-pointer'><Link to="/passwords">Passwords</Link></li>
                </ul>
                <div>
                    <a className='flex gap-1 mx-2 items-center cursor-pointer' href="https://github.com/Adeeb-Sadiq" target='_blank'>
                    <img className='w-5 invert' src="src\assets\favicon.jpeg" alt="" />
                    <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
