import React from 'react'
import './Login.css'
import{useState} from 'react'


const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Email and password submitted with :",
            {
                email,
                password,
            }
        )
        
    }
  return (
    <div>
 <form>
<input
type="text"
placeholder="Enter your Email "
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<input
type="password"
placeholder="Enter your password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>
<button type="submit">SUBMIT</button>
</form>
    </div>
  )
}

export default Login