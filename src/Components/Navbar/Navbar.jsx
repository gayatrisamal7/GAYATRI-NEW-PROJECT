import React from 'react'
import './Navbar.css'
import {useState} from 'react'
import logo from '../Assets/Logo.jpeg'
import { Link } from 'react-router-dom'

const Navbar = () => {
 const[menu,setMenu]=useState('HOME')
 
  return(
    <div className='navbar'>

      <div className='nav-logo'>
      <img src={logo} alt=""/>
      <p>app</p>
      </div>

      <ul className='nav-menu'>
      <li onClick={()=>{setMenu("HOME")}}><Link style={{textDecoration:'none'}} to ='/'>HOME</Link> {menu === "HOME"? <hr /> : <></> }</li>
       <li>OTHER</li>
        </ul>
        
     <div className='nav-login'>
      <Link to='/login'><button>LOGIN</button></Link>
     <Link to='/register'><button>REGISTER</button></Link>
     </div>
    </div>
  )
  
}

export default Navbar