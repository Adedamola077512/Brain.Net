import React from 'react';
import './Build.css';

const Build = () => {
  return (
    <div className="py-5 mt-5 text-center container text-white">
      <div>
        <span className="build-span">Let Us Know What You're Looking For</span>
        <h1 className="build-h1">We’ll Build it for You</h1>
        <p className="build-p">We are passionate about delivering great software and services.</p>
      </div>

      <div className='build'>
        <form className="form">
          {/* <p className="title">Register</p> */}
          <div className="flex">
            <label>
              <input className="input" id='inputs' type="text" placeholder="" required />
              <span>Firstname</span>
            </label>

            <label>
              <input className="input" id='inputs' type="email" placeholder="" required />
              <span>Email</span>
            </label>
          </div>

          <label>
            <input className="input" type="text" placeholder="" required />
            <span>What are you seeking for?</span>
          </label>

          <label>
            <input className="input" type="text" placeholder="" required />
            <span>How did you hear about Inletsky?</span>
          </label>

          <label>
            <input className="input" type="password" placeholder="" required />
            <span>Message</span>
          </label>

          <p className="signin">
            <input type="checkbox"/> <a href="#">I agree to the Terms & Conditions*</a>
          </p>

          <button className="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Build;
