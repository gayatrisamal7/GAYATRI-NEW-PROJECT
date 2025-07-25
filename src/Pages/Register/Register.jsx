import React from 'react'
import'./Register.css'
import {useState} from 'react'

const Register = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[confirmPassword,setConfirmPassword]=useState('')
  return (
    <div>
        <p>REGISTER HERE</p>
        <form>
       <input
       type='text'
       placeholder='Enter Your Name'
       value={name}
       onChange={(e)=>setName(e.target.value)}
       
       />
       <input
       type="email"
       placeholder='Enter Your Email'
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       />
          <input
       type="password"
       placeholder='Enter Your Email'
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       />
        <input
       type="password"
       placeholder='confirm Password'
       value={confirmPassword}
       onChange={(e)=>setConfirmPassword(e.target.value)}
       />
       <button type='submit'>SUBMIT</button>

        </form>
    </div>
  )
}

export default Register