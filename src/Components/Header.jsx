import React from 'react'
import './Header.css'
import bb from '../assets/bb-1.png'
import blue from '../assets/blue light.webp'
import globeimage from '../assets/globe-image.png'
import img from '../assets/img-27.jpg'
import { FaArrowUpLong } from "react-icons/fa6";
const Header = () => {
  return (
    <div className='image-container '>
      <img src={bb} alt="" className='background-image'/>
      <div className='text-center centered-text'>
        <span className='header-span'>Explore what’s new with inletsky</span>
        <h4 className='header-h4'>BrainNet.GL JS</h4>
        {/* P */}
        <p className='header-p'>
          BrainNet. GL JS is a Networking library for vector networking on  the Web. Its performance, real- <br />time styling, and interactivity features set the bar for anyone building fast, immersive tech on the <br />web.
        </p>
        <div class="vertical-text">
         <FaArrowUpLong className='icon-long'/> EXPLORE NOW
        </div>

      </div>
      <div className='img-flex'>
        <div><img src={blue} alt="" className='header-img'/></div>
        <div>
          <img src={globeimage} alt="" className='main-img'/>
          <div className='main-text'>
            <span className='main-span'>Product Update</span>
            <h4 className='mini-h4'>3D Networking</h4>
            <p className='mini-p'>GL JS is engineered to render even the most detailed, <br />feature-dense maps at 60 FPS on both desktop and mobile <br />
            devices. </p>
          </div>
        </div>
        <div><img src={img} alt="" className='header-img'/></div>
      </div>
    </div>
  )
}

export default Header