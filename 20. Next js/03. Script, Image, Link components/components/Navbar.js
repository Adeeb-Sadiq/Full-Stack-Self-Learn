import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-sky-800 p-4'>
        <div className='text-2xl font-bold'>
            Company
        </div>
        <div>
            <ul className='flex gap-5'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
