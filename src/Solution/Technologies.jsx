import React from 'react'
import './Technologies.css'

import img35 from '../assets/img-35.png'
import img36 from '../assets/img-36.png'
import img37 from '../assets/img-37.png'
import img38 from '../assets/img-38.png'
import img39 from '../assets/img-39.png'
import img40 from '../assets/img-40.png'
import img41 from '../assets/img-41.png'
import img42 from '../assets/img-42.png'
import img43 from '../assets/img-43.png'
import img44 from '../assets/img-44.png'
import img45 from '../assets/img-45.png'
import img46 from '../assets/img-46.png'
import img47 from '../assets/img-47.png'
import img48 from '../assets/img-48.png'
import img49 from '../assets/img-49.png'
import img50 from '../assets/img-50.png'
import img51 from '../assets/img-51.png'
import img52 from '../assets/img-52.png'
import img53 from '../assets/img-53.png'
import img54 from '../assets/img-54.png'

const Technologies = () => {
  return (
    <div className='container py-5 mt-5 text-center'>
        <span className='span-our'>Our Favorite Folder Of The</span>
        <h1 className='tech-h1'>Technologies</h1>
        <marquee behavior="" direction="">
            <div className='tech-flex py-5'>
                <img src={img35} alt="" className='tech-img'/>
                <img src={img36} alt="" className='tech-img'/>
                <img src={img37} alt="" className='tech-img'/>
                <img src={img38} alt="" className='tech-img'/>
                <img src={img39} alt="" className='tech-img'/>
                <img src={img40} alt="" className='tech-img'/>
                <img src={img47} alt="" className='tech-img'/>
            </div>
        </marquee>
        {/* section 2 */}
        <marquee behavior="" direction="right">
            <div className='tech-flex'>
                <img src={img41} alt="" className='tech-img'/>
                <img src={img42} alt="" className='tech-img'/>
                <img src={img43} alt="" className='tech-img'/>
                <img src={img44} alt="" className='tech-img'/>
                <img src={img45} alt="" className='tech-img'/>
                <img src={img46} alt="" className='tech-img'/>
            </div>
        </marquee>
        {/* section 3 */}
        <marquee behavior="" direction="right">
            <div className='tech-flex mt-5'>
                <img src={img48} alt="" className='tech-img'/>
                <img src={img49} alt="" className='tech-img'/>
                <img src={img50} alt="" className='tech-img'/>
                <img src={img51} alt="" className='tech-img'/>
                <img src={img52} alt="" className='tech-img'/>
                <img src={img53} alt="" className='tech-img'/>
                <img src={img54} alt="" className='tech-img'/>
            </div>
        </marquee>
    </div>
  )
}

export default Technologies