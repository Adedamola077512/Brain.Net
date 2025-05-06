import React from 'react'
import './Cost.css'
const Cost = () => {
  return (
    <div className='container py-5 mt-5'>
        <div className='cost-flex'>
            <div>
                <span className='cost-span'>Delivering optimal architecture and performance</span>
                <h1 className='cost-h1'>Cost-effective way possible <br />through cloud IT solutions.</h1>
                <p className='cost-p'>
                    Designed, implemented, and managed to deliver the highest performing and most secure <br />business cloud solutions, Inletsky Multi-Cloud and Hybrid Cloud Solutions deliver the right <br />application for your modern, dynamic, and flexible working environment.
                </p>
                <p className='cost-p'> 
                    And because Inletsky fully managed Hybrid and Multi-Cloud environments can be <br />reconfigured at the flick of a switch to respond to the changing rhythm of your business, <br />you enjoy complete freedom, flexibility, and control in the cloud.
                </p>
            </div>
            <div className='cost-input'>
                <h4 className='cost-h4'>
                    Free Download: Cloud <br />Best Practice Top Ten <br />Checklist
                </h4>
                <p className='cost-p'>
                  The top-ten priorities for selecting <br />the right cloud services for your <br />business. Our step-by-step checklist <br />puts you in the know.
                </p>
                <input type="text" name="" id="input" placeholder='Name*'/>
                <input type="email" id='input' placeholder='Email*'/>
                <button className='cost-btn'>SUBMIT</button>
            </div>
        </div>
    </div>
  )
}

export default Cost