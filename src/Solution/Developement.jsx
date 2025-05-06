import React from 'react'
import './Developement.css'
import img30 from '../assets/img-30.png'
import img29 from '../assets/img-29.png'
import img34 from '../assets/img-34.png'
import img31 from '../assets/img-31.png'
import img32 from '../assets/img-32.png'
import img33 from '../assets/img-33.png'
const Developement = () => {
  return (
    <div className='development container'>
        <div className='text-center'>
            <span className='developement-span'>A Wide Range of Web Application</span>
            <h1 className='developement-h1'>Development Services</h1>
            <p className='developement-p'>
            Light years ahead of our competitors, Inletsky offers custom web app development services and uses <br />the latest technologies that will compel your customers to spend lavishly on your products.
            </p>
        </div>
        {/* card section  */}
        <div className='card-section py-5'>
            <div className='card-section1'>
                <img src={img30} alt="" />
                <h6 className='card-h6'>Progressive Web <br />Applications <br />
                (PWAs)</h6>
                <p className='card-p'>Invest your hard-earned money in <br />
                progressive web app development <br />
                to provide accessible and user- <br />
                friendly online experiences.</p>
            </div>
            <div className='card-section1'>
                <img src={img34} alt="" />
                <h6 className='card-h6'>Enterprise Web <br />Application</h6>
                <p className='card-p'>Build industry-standard enterprise <br />
                web apps by using our customer- <br />
                centric agile methodologies and <br />
                keep your business competitive.</p>
            </div>
            <div className='card-section1'>
                <img src={img29} alt="" />
                <h6 className='card-h6'>Web Portals</h6>
                <p className='card-p'>Partner with Inletsky to leverage the <br />
                competency to host web apps in <br />
                the cloud, which provides additional <br />
                benefits such as scale, affordability, <br />
                security, and high uptime.</p>
            </div>
        </div>
        {/* card section-2 */}
        <div className='card-section-2'>
            <div className='card-section1'>
                <img src={img33} alt="" />
                <h6 className='card-h6'>Cloud-Based Web <br />Applications</h6>
                <p className='card-p'>
                Hire our developers to leverage the <br />
                competency of hosting web apps in <br />
                the cloud, which provides additional <br />
                benefits such as scale, affordability, <br />
                security, and high uptime.</p>
            </div>
            <div className='card-section1'>
                <img src={img32} alt="" />
                <h6 className='card-h6'>Supply Chain <br />Management Web Apps</h6>
                <p className='card-p'>
                 Outsource web app development <br />
                 services to us and develop automated <br />
                 software to streamline the <br />
                 interconnected network of suppliers, <br />
                 manufacturers, warehouses, distributors <br />
                 and retailers.
                </p>
            </div>
            <div className='card-section1'>
                <img src={img31} alt="" />
                <h6 className='card-h6'>Web Application <br />Consulting</h6>
                <p className='card-p'>
                  Our team enjoys the challenge of <br />
                  working on uncharted prospects <br />
                  and helps with brainstorming,<br />
                  analysis, and finalizing the solution <br />
                  landscape for web application <br />
                  development.
                </p>
            </div>
        </div>
        <p className='hire'>HIRE DECIDITED DEVELOPEMENT TEAM  →</p>
    </div>
  )
}

export default Developement