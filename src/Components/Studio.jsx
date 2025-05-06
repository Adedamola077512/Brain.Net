import React from 'react'
import './Studio.css'
import img21 from '../assets/img-21.png'
const Studio = () => {
  return (
    <div className='studio py-5 mt-5 container' >
        <div className='studio-flex'>
            <div>
                <span className='studio-span'>See what’s inside our studio</span>
                <h1 className='studio-h1'>Studio</h1>
                <p className='studio-p'>
                  Inletsky Studio is like Photoshop, for maps. <br />We give designers control over everything from <br />colors and fonts, to 3D features and camera <br />angles, to the pitch of the map as a car enters <br />a turn.
                </p>
                <span className='studio-more'>KNOW MORE ABOUT DESIGN →</span>
            </div>
            <div>
                <img src={img21} alt="" className='studio-img'/>
            </div>
        </div>
    </div>
  )
}

export default Studio