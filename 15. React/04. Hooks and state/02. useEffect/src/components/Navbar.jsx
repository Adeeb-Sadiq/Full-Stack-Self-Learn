import React from 'react'
import { useEffect } from 'react'

const Navbar = () => {

    useEffect(() => { // used in conditional rendering 
        alert("first render")

        // clean up function when unmount (optional)
        return () => {
            alert('component was unmounted')
        } // when navbar is removed (comment out) this function will run 
    }, [])


    return (
        <div>
            this is a navbar
        </div>
    )
}

export default Navbar
