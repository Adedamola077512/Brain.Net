import React from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div>
      {/* From Uiverse.io by ammarsaa */}
      <form className="forms py-5 mt-5">
        <p className="titles">Register</p>
        <p className="messages">Signup now and get full access to our app.</p>

        <div className="flexs">
          <label>
            <input className="inputs" id='inputz' type="text" placeholder="" required />
            <span>Firstname</span>
          </label>

          <label>
            <input className="inputs" id='inputz' type="text" placeholder="" required />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input className="inputs" type="email" placeholder="" required />
          <span>Email</span>
        </label>

        <label>
          <input className="inputs" type="password" placeholder="" required />
          <span>Password</span>
        </label>

        <label>
          <input className="inputs" type="password" placeholder="" required />
          <span>Confirm password</span>
        </label>

        <button className="submits">Submit</button>
        <p className="signins">
          Already have an account? <Link to="/login" >Signin</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
