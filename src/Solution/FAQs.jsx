import React from 'react';
import './FAQS.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { Accordion } from 'react-bootstrap';

const Frequently = () => {
  return (
    <div className='text-center mt-5 py-5 Frequently' id='FAQ'>
      <span className='faq-span'>Question people often asks</span>
      <h1 className='faq-h1'>FAQs</h1>

      {/* accordion */}
      <div className="accordion-container mt-4 mx-auto" style={{ maxWidth: '700px' }}>
        <Accordion flush>
          <Accordion.Item eventKey="0" className='accordion-gap'>
            <Accordion.Header className='faq'>What is web aoolication developement ?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            A web application is an interactive software that runs on a web server and is accessible via a web browser. It is structured so that the user interface sends data back to the development team that created it.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className='accordion-gap'>
            <Accordion.Header className='faq'>Why should you outsource web application development services From Inletsky?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            Outsourcing web application development to Inletsky ensures expert solutions, faster delivery, and cost-effective results backed by a skilled team committed to quality, innovation, and ongoing support.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className='accordion-gap'>
            <Accordion.Header className='faq'>How much does it cost to develop a web application?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            The cost to develop a web application varies based on features, complexity, and timeline—but Inletsky offers flexible pricing to suit startups and enterprises alike.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className='accordion-gap'>
            <Accordion.Header className='faq'>Which programming languages are used for web applications?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            Web applications commonly use languages like JavaScript, HTML, CSS for the front end, and Python, PHP, Ruby, or Node.js for the back end.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" className='accordion-gap'>
            <Accordion.Header className='faq'>How long does it take to build a web app?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            The time to build a web app depends on its complexity, but typically ranges from a few weeks for simple apps to several months for advanced, custom solutions.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5" className='accordion-gap'>
            <Accordion.Header className='faq'> Which is the best custom web app development company?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            Inletsky is one of the best custom web app development companies, known for delivering scalable, secure, and user-friendly solutions tailored to your business needs.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6" className='accordion-gap'>
            <Accordion.Header className='faq'>In which areas does Inletsky provide its services?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            Inletsky provides services across various areas including e-commerce, healthcare, education, finance, real estate, and custom enterprise solutions.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

    </div>
  );
};

export default Frequently;
