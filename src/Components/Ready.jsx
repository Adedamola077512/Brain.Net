import React from 'react'
import './Ready.css'
const Ready = () => {
  return (
    <div className='ready container py-5 mt-5'>
        <div className='ready-1'>
            <span className='ready-span'>You’re Good to Go</span>
            <h1 className='ready-h1'>Ready to Get Started</h1>
            <p className='ready-p'>Create an account ot talk to one of our exprets</p>
        </div>
        <div className='ready-flex'>
            <button className='btn-login'>Login</button>
            <button className='btn-signup'>SignUp</button>
        </div>
    </div>
  )
}

export default Ready