import React from 'react'
import './Intelligence.css'
import img67 from '../assets/img-67.png'
const Intelligence = () => {
  return (
    <div className='Intelligence'>
        <div className='container Intelligence-flex'>
            <div>
                <img src={img67} alt="" className='Intelligence-img'/>
            </div>
            <div className='Intelligence-section'>
                <span className='Intelligence-span'>say goodbye to labeling</span>
                <h1 className='Intelligence-h1'>The new standard of Intelligence.</h1>
                <p className='Intelligence-p'>The days of labeling data by hand over weeks, months, or even <br /> years are gone. LiDAR is an end-to-end AI pipeline that automates <br />the analysis of a variety of large, unstructured datasets, from <br />security camera footage to geospatial imagery. You can ingest,<br /> search, and categorize your data - build and train models - run <br />inference - and integrate or access LiDAR through cloud-hosted <br />APIs. Integrate LiDAR into your current workflows today to <br /> exponentially accelerate your speed-to-insight.</p>
            </div>
        </div>
    </div>
  )
}

export default Intelligence