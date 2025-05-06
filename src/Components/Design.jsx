import React from 'react'
import './Design.css'
import img20 from '../assets/img-20.png'
const Design = () => {
  return (
    <div className='container design'>
        <h5 className='span-view text-center'>VIEW CUSTOMERE STORES </h5>
        <div className='design-flex py-5 mt-5'>
            <div>
                <span className='design-span'>Design without limits</span>
                <h2 className='design-h2'>Design</h2>
                <p className='design-p'>
                  Style your map with lines, polygons, labels, <br />icons, patterns, extrusions, raster & terrain with <br />hundreds of options and a powerful expression <br />language, not only controlling all visual aspects <br />through the zoom range but having the <br />freedom to change them at any time <br />dynamically.
                </p>
                <span className='design-learn'>LEARN MORE ABOUT DLSICK →</span>
            </div>
            <div>
                <img src={img20} alt="" className='design-img'/>
            </div>
        </div>
    </div>
  )
}

export default Design