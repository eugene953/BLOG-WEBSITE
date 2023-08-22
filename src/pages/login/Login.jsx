import React from 'react'
import "./login.css"
import login from "../../assets/login.webp"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Login() {
  return (
    <div className='login'>
      <img src={login}  className="loginImg" alt="" />

      <div className="loginItem">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <div className="label1">
              <label >Email</label>
                <input type="text" className="loginInput" placeholder='Enter your email...' />
                     </div>
                     <div className="label2">
         <label>Password</label>
    <input type="text" className="loginInput" placeholder='Enter your password...'  />
    </div>
    
     <button className="loginButton">Login</button>
      </form>
      <button className="RegisterButton">
      <Link  className="link" to="/register">Register</Link>
      </button>
    </div>
    </div>
  )
}
