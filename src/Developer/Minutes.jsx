import React from 'react'
import './Minutes.css'
import img66 from '../assets/img-66.png'
const Minutes = () => {
  return (
    <div className='container py-5 mt-5'>
        <div className='Minutes-flex'>
            <div>
                <span className='Minutes-span'>say goodbye to labeling</span>
                <h1 className='Minutes-h1'>AI in Minutes, <br />Not Months.</h1>
                <p className='Minutes-p'>
                    You don’t really want AI, you want answers. Getting them today <br />takes months - or years - and costs millions of dollars. <br />
                    What if you could get around the problem of needing massive <br />amounts of human-labeled data? What if you could use AI to get <br />critical insights - even when data is unstructured or sparse? <br />
                    Instead of needing months of human labeling to have some base <br />AI performance in a new situation, RAIC can get to work <br />immediately, radically reducing the latency between data <br />collection and actionable insights.
                </p>
            </div>
            <div>
                <img src={img66} alt="" className='Minutes-img'/>
            </div>
        </div>
    </div>
  )
}

export default Minutes