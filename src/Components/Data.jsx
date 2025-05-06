import React from 'react'
import './Data.css'
import img19 from '../assets/img-19.png'
const Data = () => {
  return (
    <div className='data container py-5 mt-5'>
        <div className='data-flex'>
            <div>
              <span className='data-span'>Your data is our responsibility</span>
              <h1 className='data-h1'>Data</h1>
              <p className='data-p'>
                Our data is powered by hundreds of data  <br />
                sources, and a distributed global users base of <br />more than half a billion monthly active users.
              </p>
            </div>
            <div>
                <img src={img19} alt="" className='data-img'/>
            </div>
        </div>
    </div>
  )
}

export default Data