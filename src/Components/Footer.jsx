import React from 'react'
import './Footer.css'
import img17 from '../assets/img-17.png'
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='container py-5 mt-5'>
        <hr style={{color: "white"}}/>
        <div className='footer-flex py-5'>
            <div className='footer-img'>
                <img src={img17} alt="" className=''/>
            </div>
            {/* products */}
            <div className='grid'>
                <h6 className=''><b>PRODUCTS</b></h6>
                <li>Fleet</li>
                <li>Address Autofill</li>
                <li>Navigation SDK</li>
                <li>Dash</li>
                <li>Search</li>
                <li>Mobile Maps SDK</li>
                <li>Studio</li>
                <li>Data</li>
                <li>Vision</li>
                <li>Atlas</li>
                <li>Pricing</li>
            </div>
            {/* Resourecs */}
            <div className='grid'>
                <h6><b>RESOURCES</b></h6>
                <li>Industries</li>
                <li>Use Cases</li>
                <li>How-to Videos</li>
                <li>Webinars</li>
                <li>Events</li>
            </div>
            {/* Support  */}
            <div className='grid'>
                <h6><b>SUPPORT</b></h6>
                <li>Help</li>
                <li>Support Service</li>
                <li>Documentation</li>
                <li>Open source</li>
            </div>
            {/* Company  */}
            <div className='grid'> 
                <h6><b>COMPANY</b></h6>
                <li>About</li>
                <li>Customers</li>
                <li>Community</li>
                <li>Careers</li>
                <li>Sustainability</li>
                <li>Diverity $ Inclusion</li>
                <li>Team</li>
                <li>Blog</li>
                <li>Press</li>
                <li>Contact</li>
            </div>
        </div>
        <hr />
        <div className='team-flex'>
            <div className='team'>
                <span>© Inletsky</span>
                <span>Tears</span>
                <span>Privacy</span>
                <span>Security</span>
            </div>
            <div className='social-icon'>
                <span><FaTwitter /></span>
                <span><CiLinkedin /></span>
                <span><FaFacebookF /></span>
                <span><FaInstagram /></span>
                <span><FaYoutube /></span>
            </div>
        </div>
    </div>
  )
}

export default Footer