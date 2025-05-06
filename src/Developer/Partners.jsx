import React from 'react'
import './Partners.css'
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import img4 from '../assets/img-4.png'
import img7 from '../assets/img-7.png'


const Partners = () => {
  return (
    <div className='container py-5 mt-5 text-center text-white'>
        <p className='partners-p'>WE WORK WITH SOME OF THE BEST TO UNLOCK IMPOSSIBLE AI.</p>
        <h1 className='partners-h1'>Our Partners</h1>
        <marquee behavior="" direction="">
        <div className='partners-flex'>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img7} alt="" />
        </div>
        </marquee>
    </div>
  )
}

export default Partners