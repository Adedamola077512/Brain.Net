import React from 'react'
import './Vision.css'
import img23 from '../assets/img-23.png'
const Vision = () => {
  return (
    <div className='container py-5 mt-5'>
        <div className='vision-flex'>
            <div>
                <img src={img23} alt="" className='vision-img'/>
            </div>
            <div>
                <span className='vision-span'>The vision behind Inletsky</span>
                <h1 className='vision-h1'>Vision</h1>
                <p className='vision-p'>The Inletsky Vision SDK describes every curb, lane, street <br />sign, and road hazard it sees as data. Developers use the <br /> SDK's AI-powered semantic segmentation, object <br />detection, and classification to deliver precise navigation <br />guidance, display driver assistance alerts, and detect and <br />map road incidents.</p>
                <span className='vision-dis'>Discover Vision  →</span>
            </div>
        </div>
    </div>
  )
}

export default Vision