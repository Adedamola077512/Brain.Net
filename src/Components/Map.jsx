import React from 'react'
import './Map.css'
import img22 from '../assets/img-22.png'
const Map = () => {
  return (
    <div className='map container py-5 mt-5' >
        <div className='map-flex'>
            <div>
                <img src={img22} alt="" className='map-img'/>
            </div>
            <div>
                <span className='map-span'> Experience our maps</span>
                <h1 className='map-h1'>Map</h1>
                <p className='map-p'>

                  Our APIs, SDKs, and live updating map data give <br />developers tools to build better mapping, navigation, and <br />search experiences across platforms.
                </p>
                <span className='map-more'>MORE ABOUT MAPS →</span>
            </div>
        </div>
    </div>
  )
}

export default Map