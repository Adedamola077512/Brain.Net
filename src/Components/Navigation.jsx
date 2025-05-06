import React from 'react'
import './Navigation.css'
import img25 from '../assets/img-25.png'
const Navigation = () => {
  return (
    <div className='container navigation'>
        <div className='navigation-flex py-5 mt-5'>
            <div>
                <img src={img25}alt="" className='nav-img'/>
            </div>
            <div>
                <span className='nav-span'>Design without limits</span>
                <h1 className='nav-h1'>Navigation</h1>
                <p className='nav-p'>
                  Inletsky provides powerful routing engines, accurate, <br />traffic-powered travel times, and intuitive turn-by-turn <br />directions to help you build engaging navigation <br />experiences.
                </p>
                <span className='nav-learn'>more about navigate  →</span>
            </div>
        </div>
    </div>
  )
}

export default Navigation