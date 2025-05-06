import React from 'react'
import './Analyse.css'
import img68 from '../assets/img-68.png'
import img69 from '../assets/img-69.png'
import img71 from '../assets/img-71.png'
const Analyze = () => {
  return (
    <div className='container py-5 mt-5'>
        <div className='text-center text-white'> 
            <span className='span-anlayse'>any kind of data</span>
            <h1 className='anlayse-h1'>Analyze your Unique, <br />Multidimensional data.</h1>
        </div>
        <div className='anlayse-flex mt-5'>
            <div className='anlayse-card'>
                <img src={img68} alt="" className='anlayse-img'/>
                <p className='Full'>Full Motion Video</p>
            </div>
            <div className='anlayse-card'>
                <img src={img69} alt="" className='anlayse-img'/>
                <p className='Full'>Geospatial Data</p>
            </div>
            <div className='anlayse-card'>
                <img src={img71} alt="" className='anlayse-img'/>
                <p className='Full'>Geospatial Data</p>
            </div>
        </div>
    </div>
  )
}

export default Analyze