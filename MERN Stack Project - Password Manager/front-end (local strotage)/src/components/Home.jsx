import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className='flex flex-col items-center gap-5 xl:w-[1280px] xl:m-auto'>
            <div className='py-8 w-2/3 flex flex-col gap-1 items-center transition-all text-3xl sm:text-5xl lg:text-8xl lg:gap-7 lg:items-start m-9'>
                <h1>Keep Your</h1>
                <h1 className="lg:relative left-44">Passwords Safe</h1>
            </div>
            <button className='text-lg hover:underline'><Link to="/passwords">Go To Passwords -&gt;</Link></button>
        </div>
    )
}

export default Home
