import React from 'react'
import './Login.css'
import google from '../Assets/Google.jpg'
import In from '../Assets/Linkedin.jpeg'
import logo from '../Assets/Radiant logo mark and type.png'

export const Login = () => {
  return (
    <>
    <div className='logo-img'>
        <img src={logo} alt="logo" />
      </div>
    <div className='main'>
      <div className='container'>
        <div className='header'>
            <div className='text'>Login</div>
        </div>
      </div>
      <div className='icons'>
        <div className='g-img'>
            <button><img className='img1' src={google} alt='google'/></button>
            <button><img className='img2' src={In} alt='Linkedin'/></button>
        </div>
       </div>
       <div className='or'>or</div>
       <div className='inputs'>
        <div className='input'>
            <input type='text'/>
        </div>
        <div className='input'>
            <input type='password'/>
        </div>
        <div className='submit-container'>
            <div className='submit'>Log in</div>
        </div>
        <div className='others'>
        <div className='reset'>Reset Password</div>
        <div className='signup'>New user? <span>Sign Up</span></div>
        </div>
       </div>
    </div>
    </>
  )
}
export default Login
