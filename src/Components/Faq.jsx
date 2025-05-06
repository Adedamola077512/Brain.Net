import React from 'react';
import './Faq.css';
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
            <Accordion.Header className='faq'>What is Inletsky GL JS?</Accordion.Header>
            <Accordion.Body className='body-faq'>
             With Atlas, you can self-host Inletsky maps and geocoding APIs, Streets, Satellite, and Terrain tilesets, and Inletsky <br />Studio on your network, behind a firewall, or even air-gapped. Use Atlas to power on-premises applications using <br />Inletsky GL JS v2 and Inletsky Maps SDKs for iOS and Android.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className='accordion-gap'>
            <Accordion.Header className='faq'>What are the use cases for Inletsky GL JS?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            Inletsky GL JS is used for creating interactive web maps with features like real-time tracking, 3D visualizations, custom styling, geospatial data overlays, indoor mapping, and offline or self-hosted deployments. <br />
            
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className='accordion-gap'>
            <Accordion.Header className='faq'>What browsers are supported?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            Inletsky GL JS supports all major modern browsers including Chrome, Firefox, Safari, and Microsoft Edge with full WebGL support.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className='accordion-gap'>
            <Accordion.Header className='faq'>How do I get started using Inletsky GL JS?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            To get started with Inletsky GL JS, install the library via npm or a CDN, set up a basic HTML file, and use your access token to display an interactive map with your desired style.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4" className='accordion-gap'>
            <Accordion.Header className='faq'>What are the new features in Inletsky GL JS v2?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            Inletsky GL JS v2 offers improved performance, 3D terrain support, enhanced camera controls, and better rendering for complex visualizations..
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5" className='accordion-gap'>
            <Accordion.Header className='faq'> What are the performance improvements in Inletsky GL JS v2?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            Inletsky GL JS v2 delivers faster load times, smoother map interactions, and more efficient rendering for complex data and 3D scenes
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6" className='accordion-gap'>
            <Accordion.Header className='faq'>What can I do with 3D rendering in Inletsky GL JS v2?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            In Inletsky GL JS v2, 3D rendering lets you create interactive maps with 3D terrain, buildings, and features for enhanced data visualization and user engagement.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7" className='accordion-gap'>
            <Accordion.Header className='faq'>What are the new features or improvements for 3D rendering?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            New features for 3D rendering include improved performance, enhanced lighting and shadows, better texture mapping, and more realistic terrain rendering. These updates allow for smoother interactions, higher-quality visuals, and greater flexibility in displaying 3D maps and data.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="8" className='accordion-gap'>
            <Accordion.Header className='faq'>What is the free form camera API?</Accordion.Header>
            <Accordion.Body className='body-faq'>
            The Free Form Camera API allows for flexible, user-controlled camera movement in 3D space. It enables smooth navigation, such as zooming, rotating, and panning, offering dynamic and interactive views of 3D environments or maps.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

    </div>
  );
};

export default Frequently;
