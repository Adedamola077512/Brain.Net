import React from 'react'
import './Innovative.css'
import img28 from '../assets/img-28.png'
import { GoDotFill } from "react-icons/go";
const Innovative = () => {
  return (
    <div className='container py-5 text-center'>
        <span className='Innovative-span'>Explore what’s new with inletsky</span>
        <div className='Innovative-flex py-5'>
            <div>
                <h1 className='Innovative-h1'>Innovative Web <br />
                Solutions</h1>
                <p className='Innovative-p'>
                  We are a leading custom web app development company that <br />creates scalable web applications, web portals and solutions with <br />high-quality standards. 
                </p>
                <li><GoDotFill className='dot'/> Latest web technologies like Elixir, ReactJS, Laravel, Node.js</li>
                <li><GoDotFill className='dot'/> Wallet-friendly engagement models to hire developers</li>
                <li><GoDotFill className='dot'/> Daily collaborative meetings with product managers</li>
                <li><GoDotFill className='dot'/> Free full-cycle quality assurance</li>
                <p className='p-want'>WANT A FREE CONSULATION  →</p>
            </div>
            <div>
                <img src={img28} alt="" className='Innovative-img'/>
            </div>
        </div>
    </div>
  )
}

export default Innovative