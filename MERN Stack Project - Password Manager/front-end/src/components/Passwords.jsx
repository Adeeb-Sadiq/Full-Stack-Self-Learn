import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';


const Passwords = () => {

    const [form, setForm] = useState({ id: " ", username: "", url: "", password: "" })
    const [passwords, setPasswords] = useState([])
    const visibility = useRef()

    useEffect(() => {
        if (localStorage.getItem('securepasswords')) {
            let data = localStorage.getItem('securepasswords')
            setPasswords(JSON.parse(data))
        }
    }, [])


    const toggleVisibility = (e) => {
        if (e.target.src.includes('eye-cut')) {
            e.target.src = 'src/assets/eye.svg'
            visibility.current.type = 'text'
        } else {
            e.target.src = 'src/assets/eye-cut.svg'
            visibility.current.type = 'password'
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value, id: uuidv4() })
    }

    const submitForm = () => {
        console.log(form.username)
        if (form.username.length > 0 && form.url.length > 0 && form.password.length > 0) {
            setPasswords([...passwords, form])
            setForm({ id: " ", username: "", url: "", password: "" })
            localStorage.setItem('securepasswords', JSON.stringify([...passwords, form]))
        } else {
            toast("Empty Field")
        }
    }

    const handleDelete = (e, id) => {
        let confirmation = confirm('Delete Password?')
        if (confirmation) {
            let newPasswords = passwords.filter(item => {
                return item.id !== id
            })
            setPasswords(newPasswords)
            localStorage.setItem('securepasswords', JSON.stringify(newPasswords))
        }
    }

    const handleCopy = (e) => {
        navigator.clipboard.writeText(e.target.innerHTML)
        toast('copied to clipboard')
    }


    return (
        <div className='flex flex-col items-center gap-3 xl:w-[1280px] xl:m-auto'>
            <ToastContainer />
            {/* Same as */}
            <ToastContainer />
            <div className="lock-logo">
                <img className='invert w-11' src="src\assets\lock.svg" alt="" />
            </div>
            <div className='sm:w-2/5 flex flex-col gap-5 items-center w-4/5'>
                <input onChange={handleChange} value={form.username} name='username' className='text-black outline-none py-1 px-3 rounded-xl w-full' placeholder='Username' type="text" />
                <input onChange={handleChange} value={form.url} name='url' className='text-black outline-none py-1 px-3 rounded-xl w-full' placeholder='Site URL' type="text" />
                <div className='w-full flex relative'>
                    <input onChange={handleChange} value={form.password} ref={visibility} name='password' className='text-black outline-none py-1 px-3 rounded-xl w-full' placeholder='Password' type="password" />
                    <img onClick={toggleVisibility} className='absolute bg-white right-1 top-1 cursor-pointer' src="src\assets\eye-cut.svg" alt="" />
                </div>
                <button onClick={submitForm} className='text-lg w-fit py-1 px-3 rounded-full font-bold cursor-pointer bg-white text-black hover:text-white hover:bg-black'>Submit</button>
            </div>
            <div className='font-bold text-xl mt-2'>PASSWORDS</div>
            <div className='text-sm mt-2'>click on user name or password to copy to clipboard</div>
            <div className="savedPasswords flex flex-col text-xl gap-5 w-full px-10">
                <div className='sm:flex flex-col justify-around sm:flex-row sm:gap-5 hidden'>
                    <div className='font-bold text-xl w-1/3 text-center'>Site</div>
                    <div className='font-bold text-xl w-1/3 text-center'>User-Name</div>
                    <div className='font-bold text-xl w-1/3 text-center'>Password</div>
                </div>
                {passwords.map(item => {
                    return (
                        <div key={item.id} className='flex flex-col justify-around sm:flex-row gap-2 sm:gap-5 sm:text-center'>
                            <div className='sm:w-1/3 sm:text-center'><span className='sm:hidden'>Site: </span>
                            <span onClick={handleCopy} className='cursor-pointer'>
                            {item.url}
                            </span>
                            </div>
                            <div className='sm:w-1/3 sm:text-center'><span className='sm:hidden'>User-Name: </span>
                            <span onClick={handleCopy} className='cursor-pointer'>
                            {item.username}
                            </span>
                            </div>
                            <div className='flex gap-3 sm:justify-around sm:w-1/3 sm:text-center'>
                                <div><span className='sm:hidden'>Password: </span>
                                <span onClick={handleCopy} className='cursor-pointer'>
                                {item.password}
                                </span>
                                </div>
                                <img onClick={(e) => handleDelete(e, item.id)} className='invert w-5' src="src\assets\delete.svg" alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Passwords
