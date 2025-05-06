import React from 'react'
import './Geospatial.css'
import { FaArrowUpLong } from "react-icons/fa6";
const Geospatial = () => {
  return (
    <div className='Geospatial'>
        <div className='text-center Geospatial-section'>
            <span className='span-geo'>Instant automated detection,for anything.</span>
            <h1 className='Geospatial-h1'>Geospatial AI</h1>
            <p className='Geospatial-p'>he power to dynamically manage your ground assets and critical infrastructure.Remotely. At scale. <br />Cost effectively.</p>
            <div class="vertical-text">
                <FaArrowUpLong className='icon-long'/> EXPLORE NOW
            </div>
        </div>
    </div>
  )
}

export default Geospatial