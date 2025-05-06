import React from 'react';
import './OurClient.css'

// import images from asserts
import img1 from '../assets/img-1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import img4 from '../assets/img-4.png'
import img5 from '../assets/img-5.png'
import img6 from '../assets/img-6.png'
import img7 from '../assets/img-7.png'
import img8 from '../assets/img-8.png'
import img9 from '../assets/img-9.png'
import img10 from '../assets/img-10.png'
import img11 from '../assets/img-11.png'
import img12 from '../assets/img-12.png'
import img13 from '../assets/img-13.png'
import img14 from '../assets/img-14.png'
import img15 from '../assets/img-15.png'
const OurClient = () => {
  return (
    <div className='our-client container'>
      <span className='our-span'>Trusted by the industry leaders</span>
      <h1 className='our-h1'>Our Client</h1>
      <marquee> 
        <div className='our-client-img-flex'>
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
      </marquee>
      <marquee behavior="" direction="right"> 
        <div className='our-client-img-flex'>
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
        </div>
      </marquee>
      <marquee behavior="" direction="left"> 
        <div className='our-client-img-flex'>
          <img src={img11} alt="" />
          <img src={img12} alt="" />
          <img src={img13} alt="" />
          <img src={img14} alt="" />
          <img src={img15} alt="" />
        </div>
      </marquee>
    </div>
  )
}

export default OurClient