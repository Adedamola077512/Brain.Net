import React from 'react'
import './Cloud.css'
import img58 from '../assets/img-58.png'
import img57 from '../assets/img-57.png'
import img56 from '../assets/img-56.png'
import img61 from '../assets/img-61.png'
import img59 from '../assets/img-59.png'
const Project = () => {
  return (
    <div className='container py-5 mt-5'>
        <div className='text-center'>
            <span className='project-span'>Hybrid and Multi-Cloud environment</span>
            <h1 className='project-h1'>Business Cloud Solutions</h1>
        </div>
        <div>
            <div className='project-card py-5'>
                <div className='project-card-img'>
                    <img src={img58} alt=""className='project-img'/>
                </div>
                <span className='project-card-span'></span>
                <div>
                    <h1 className='project-card-h1'>Security by Default</h1>
                    <p className='project-card-p'>
                    At Inletsky, security is built into all our services and solutions by default. Our Managed IT <br />Security Services experts will ensure you have complete control and confidence in the <br />integrity of your data and the efficacy of your security systems, procedures, and protocols.
                    </p>
                </div>
            </div>
            {/* <span className='project-card-span1'></span> */}
            {/* project-card-1 */}
            <div className='project-card-1'>
                <div>
                    <h1 className='project-card-h1'>Managed Multi Cloud</h1>
                    <p className='project-card-p'>
                     Inletsky Managed Multi-cloud service ensures you always get the best performing architecture <br />for your applications and workloads. Understanding how and where your business is using its <br />application and services allows us to align your cloud IT solutions with your business operations <br />to risk, complexity, and cost.
                    </p>
                </div>
                <span className='project-card-span'></span>
                <div className='project-card-img'>
                    <img src={img57} alt="" className='project-img'/>
                </div>
            </div>

            {/* project-card  */}
            <div className='project-card py-5'>
                <div className='project-card-img'>
                    <img src={img61} alt="" className='project-img-1'/>
                </div>
                <span className='project-card-span'></span>
                <div>
                    <h1 className='project-card-h1'>Virtual Data Centre</h1>
                    <p className='project-card-p'>
                      As an experienced Hybrid and Multi-Cloud solution provider, we’ll provision and de- <br />provision resources in response to your changing needs. To ensure you get the ongoing <br />support you need, our co-managed environment allows your IT teams to collaborate with <br />our local Inletsky engineers as if Inletsky was an extension of your own data center. This is <br />a fully flexible service based on your internal capabilities and capacity.
                    </p>
                </div>
            </div>

            {/* project-card-1 */}
            <div className='project-card-1'>
                <div>
                    <h1 className='project-card-h1'>Cloud Migration</h1>
                    <p className='project-card-p'>
                      Because you need to be able to respond to changing market conditions, as part of Inletsky <br />Hybrid and Multi-cloud solutions, we also deliver Cloud Migration solutions to enable a <br />speedy and efficient platform migration and modernization. Our Cloud Services team can <br />migrate different types of platforms to keep them updated and operating at peak <br />performance. This includes your Public Cloud migrations to AWS and Azure.
                    </p>
                </div>
                <span className='project-card-span'></span>
                <div className='project-card-img'>
                    <img src={img56} alt="" className='project-img'/>
                </div>
            </div>

            {/* project-card  */}
            <div className='project-card py-5'>
                <div className='project-card-img'>
                    <img src={img59} alt="" className='project-img'/>
                </div>
                <span className='project-card-span'></span>
                <div>
                    <h1 className='project-card-h1'>Security by Default</h1>
                   <p className='project-card-p'>
                     At Inletsky, security is built into all our services and solutions by default. Our Managed IT <br />Security Services experts will ensure you have complete control and confidence in the <br />integrity of your data and the efficacy of your security systems, procedures, and protocols.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project