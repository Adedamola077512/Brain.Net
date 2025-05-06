import React from 'react'
import './Atlas.css'
import img24 from '../assets/img-24.png'
const Atlas = () => {
  return (
    <div className='container'>
        <div className='atlas-flex py-5 mt-5'>
            <div>
                <img src={img24} alt="" className='atlas-img'/>
            </div>
            <div>
                <span className='atlas-span'>Our Newest Product</span>
                <h1 className='atlas-h1'>Atlas</h1>
                <p className='atlas-p'>
                With Atlas, you can self-host Inletsky maps and <br />geocoding APIs, Streets, Satellite, and Terrain tilesets, <br />and Inletsky Studio on your network, behind a firewall, or <br />even air-gapped. Use Atlas to power on-premises <br />applications using Inletsky GL JS v2 and Inletsky Maps <br />SDKs for iOS and Android.
                </p>
                <span className='try-span'>TRY ATLAS  →</span>
            </div>
        </div>
    </div>
  )
}

export default Atlas