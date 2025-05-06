import React from 'react'
import './Card.css'
import img68 from '../assets/img-68.png'
import img69 from '../assets/img-69.png'
const Card = () => {
  return (
    <div className='container'>
        <div className='card-flex'>
            <div className='Card'>
                <img src={img68} alt="" className='Card-img'/>
                <h5 className='Card-h5'>Selecting the Right Cloud for Your <br />Business.</h5>
                <p className='Card-p'>
                   There are a myriad of cloud options and service levels available today – the <br />challenge is to ensure that service capabilities align with your business <br />requirements and help your business accelerate growth and unlock innovation.
                </p>
                <a href="" className='Card-read'>READ BLOG</a>
            </div>
            <div className='Card'>
                <img src={img69} alt="" className='Card-img'/>
                <h5 className='Card-h4'>How businesses can maximise the use of their <br />public cloud investment to emerge stronger</h5>
                <p className='Card-pp'>
                    In the midst of the global pandemic, it has become very clear that the different <br />responses businesses have taken to the situation can be tied to mindset.
                </p>
                <a href="" className='Card-read'>READ BLOG</a>
            </div>
        </div>
    </div>
  )
}

export default Card