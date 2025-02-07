// src/AccountCreationForm.js
import React, { useState } from 'react';
import '../components/AccountCreationForm.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    email: '',
    emailConfirmation: '',
    password: '',
    title: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    subscribe: false,
    privacyPolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    
    <form onSubmit={handleSubmit} className="account-form">
      <div>
        
        <h1 >Create your account</h1>
        <p className='l2'>Create your account to have access to a more personalized experience.</p>
        <p className='l3'>Already have an account? <e><Link to="/Login">Login here</Link></e></p></div>
       <div className='content'>
          <div className='l' id="left">
            <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            </div>
            <div>
              <label>Email Confirmation</label>
              <input
                type="email"
                name="emailConfirmation"
                placeholder='Confirm  your email'
                value={formData.emailConfirmation}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder='Create  a password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
      
          <div className='l' id="Right">
            <div>
              <label>Title</label>
              <select
  name="title"
  value={formData.title}
  onChange={handleChange}
  className="title-select"
>
  <option value="" className='uy'>Select an option</option>
  <option value="Mr">Mr</option>
  <option value="Miss">Miss</option>
  <option value="Mrs">Mrs</option>
  <option value="Mrs">Ms</option>
  <option value="Mrs">Prefer Not to Say</option>
</select>
            </div>
          <div className='names'>
            <div>
              <label>First Name</label>
              <input
                type="text"
                placeholder='Enter  your first name'
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
              placeholder='Enter  your last name'
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
            <div>
              <label>Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      <div className='bu'> 
    
        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          <we className='bi'>Subscribe to receive emails.</we>
        </label>
     
    
        <label>
          <input
            type="checkbox"
            name="privacyPolicy"
            checked={formData.privacyPolicy}
            onChange={handleChange}
            required
          />
           <we className='bi'>I have read, understood and agree to the <a href='#' >Privacy Policy.</a> </we>
          
        </label>
      </div>
      <div className='lastbuttons'>
  <button id='google'>
    <img src="/google.png" alt="Google Icon"  className='logos'/>
    Continue with Google
  </button>
  <button id='apple'>
    <img src="/apple.png" alt="Apple Icon"  className='logos'/>
    Continue with Apple
  </button>
</div>
<Link to='/Homepagel'> 
<button className='continue' type="submit">Continue</button>
</Link>
    </form>
  );
};

export default Signup;
