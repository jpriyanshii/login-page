import React from 'react'
import './Login.css'
import google from '../Assets/Google.jpg'
import In from '../Assets/Linkedin.jpeg'
import logo from '../Assets/Radiant logo mark and type.png'

export const Login = () => {
  return (
    <>
    <div class='logo-img'>
        <img src={logo} alt="logo" height={60} width={280}  />
      </div>
    <div class='main'>
      <div className='container'>
        <div class='header'>
            <div class='text'>Login</div>
        </div>
      </div>
      <div class='icons'>
        <div class='g-img'>
            <button><img class='img1' src={google} alt='google'/></button>
            <button><img class='img2' src={In} alt='Linkedin'/></button>
        </div>
       </div>
       <div class='mid'>
        <div class='underline'></div>
        <div class='or'>or</div>
        <div class='underline'></div>
       </div>
       <div class='inputs'>
        <div class='input'>
            <input type='Email' placeholder='E-mail' />
        </div>
        <div class='input'>
            <input type='password' placeholder='Password' />
        </div>
        <div class='submit-container'>
            <div class='submit'>Log in</div>
        </div>
        <div class='others'>
        <div class='reset'>Reset Password</div>
        <div class='signup'>New user? <span>Sign Up</span></div>
        </div>
       </div>
    </div>
    </>
  )
}
export default Login
