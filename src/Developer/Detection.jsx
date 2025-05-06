import React from 'react'
import './Detection.css'
import img63 from '../assets/img-63.png'
import img64 from '../assets/img-64.png'
import img65 from '../assets/img-65.png'
const Detection = () => {
  return (
    <div className='container py-5 mt-5'>
        <div className='Detection-flex'>
            <div>
                <span className='span-geo'> order from disorder</span>
                <h1 className='Detection-h1'>Detection in minutes, <br />without labeled data.</h1>
                <div>
                    <img src={img65} alt="" /> <br /><br />
                    <p className='Detection-p'>Inletsky’s LiDAR (Light Detection and Ranging) automates the analysis <br />of large, unstructured datasets so you can train and deploy AI models <br />radically faster than traditional approaches.</p>
                </div>
                <div>
                    <img src={img64} alt=""/> <br /><br />
                    <p className='Detection-p'>With LiDAR, non-technical teams can build and run classification and <br />detection models in minutes without labeled data</p>
                </div>
            </div>
            <div>
                <img src={img63} alt="" className='Detection-img'/>
            </div>
        </div>
    </div>
  )
}

export default Detection