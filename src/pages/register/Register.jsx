import React from 'react'
import "./register.css"
import register from "../../assets/register.webp";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Register() {
  return (
    <div className='Register'>
      <img src={register} alt="" className="registerImg" />
      <div className="registerItem">
        <span className="registerTitle">Register</span>
        <form className="registerForm">

        <div className="label1">
                <label >Username</label>
                 <input 
                 type="text" 
                 className="registerInput" 
                 placeholder='Enter your username...' />
                    </div>

            <div className="label2">
              <label >Email</label>
                <input type="text" className="registerInput" placeholder='Enter your email...' />
                     </div>
              
              <div className="label3">
                  <label>Password</label>
                    <input type="text" className="registerInput" placeholder='Enter your password...'  />
                      </div>
                      
     <button className="registerButton">Register</button>
      </form>
      <button className="loginButton">
      <Link className="link" to="/login">Login</Link>
      </button>
      </div>
    </div>
  )
}
