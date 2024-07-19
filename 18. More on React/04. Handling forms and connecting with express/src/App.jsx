import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 2000);
    })    
  }
  
  const onSubmit = async (data) => {
    // await delay() // simulating delay 
    // console.log(data)

    let r = await fetch('http://localhost:3000/', {method: "POST", headers: {"content-type":"application/json"}, body: JSON.stringify(data)})
    r = await r.text()

    console.log(r)

    // if(data.username === "Reactjs") {
    //   setError('thisForm', {message: "Invalid username"})
    // } 
    // if(data.username === "samuel") {
    //   setError('blocked', {message: "This user is blocked"})
    // }


  }

  return (
    <>
    {isSubmitting && <div>Submitting...</div>}
      <form action=""  onSubmit={handleSubmit(onSubmit)}>
        <input {...register('username', {required: {value: true, message:'Username is required'}, minLength: {value:4, message:"Min length of username is 4"}})} type="text" placeholder='username' />
        <input {...register("password", {required: {value: true, message:'Password is required'}, minLength: {value:4, message:"Min length of password is 4"}})} type="password" placeholder='password' />
        <input disabled = {isSubmitting} type="submit" value="Submit" />
        {errors.username && <div>{errors.username.message}</div>}
        {errors.password && <div>{errors.password.message}</div>}
        {errors.thisForm && <div>{errors.thisForm.message}</div>}
        {errors.blocked && <div>{errors.blocked.message}</div>}
      </form>
    </>
  )
}

export default App
