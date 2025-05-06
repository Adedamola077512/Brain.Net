import React from 'react'
import './project.css'
import img58 from '../assets/img-58.png'
import img57 from '../assets/img-57.png'
import img56 from '../assets/img-56.png'
import img61 from '../assets/img-61.png'
const Project = () => {
  return (
    <div className='container py-5 mt-5'>
        <div className='text-center'>
            <span className='project-span'>Build A Success-Driven Development team to protect your</span>
            <h1 className='project-h1'>Project Scope</h1>
        </div>
        <div>
            <div className='project-card py-5'>
                <div className='project-card-img'>
                    <img src={img58} alt=""className='project-img'/>
                </div>
                <span className='project-card-span'></span>
                <div>
                    <h1 className='project-card-h1'>Designer</h1>
                    <p className='project-card-p'>
                        UI/UX Designers are responsible for the whole appearance and feel of a web application, <br />including the User Interface (UI) and User Experience (UX) design. They impact design <br />decisions since they are in charge of the entire product design, including color, typeface,<br /> navigation, and other elements.
                    </p>
                </div>
            </div>
            {/* <span className='project-card-span1'></span> */}
            {/* project-card-1 */}
            <div className='project-card-1'>
                <div>
                    <h1 className='project-card-h1'>Backend Developer</h1>
                    <p className='project-card-p'>
                       Want a clear picture of database structure, data processing, and third-party integrations? <br />Our backend web applications developers will manage everything for you in a timely <br />manner. They actively ensure that data is exchanged securely and efficiently.
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
                    <h1 className='project-card-h1'>Frontend Developers</h1>
                    <p className='project-card-p'>
                      The visual aspect of a web app is the face of your brand. Hire web app developers <br />to determine how your users will view and interact. They bring the web app's layout <br />to life by building scripts and collaborating with dynamic libraries and frameworks.
                    </p>
                </div>
            </div>

            {/* project-card-1 */}
            <div className='project-card-1'>
                <div>
                    <h1 className='project-card-h1'>Product Manager</h1>
                    <p className='project-card-p'>
                      Our domain-savvy product manager keeps the team focused and protects the project <br />brscope. They are in charge of the budget, planning, and ensuring that the team is filled <br />with the greatest minds.
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
                    <img src={img58} alt="" className='project-img'/>
                </div>
                <span className='project-card-span'></span>
                <div>
                    <h1 className='project-card-h1'>Quality Assurance Engineer</h1>
                   <p className='project-card-p'>
                      Our Q/A testing does not occur at the conclusion of the development process. Instead, the <br />process begins once the team has created a UI layout and continues till the launch stage. <br />To guarantee that the design meets the criteria, our QA assurance engineer will use <br />automated or manual testing methods.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project