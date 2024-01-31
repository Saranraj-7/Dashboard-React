import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="container my-5 px-5 ">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-4">
          <label htmlFor="firstName" className="form-label" style={{ fontWeight: 'bold' }}>
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your FirstName"
            required
          />
        </div>

        <div className="mt-2">
          <label htmlFor="lastName" className="form-label" style={{ fontWeight: 'bold' }}>
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your LastName"
            required
          />
        </div>

        <div  className="mt-2">
          <label htmlFor="email" className="form-label" style={{ fontWeight: 'bold' }}>
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            required
          />
        </div>

        <div className="mt-2 ">
          <label htmlFor="gender" className="form-label" style={{ fontWeight: 'bold' }}>
            Gender
          </label>
          <div className="form-check ms-3">
            <input
              type="radio"
              className="form-check-input"
              id="male"
              name="gender"
              value="male"
              onChange={handleChange}
              checked={formData.gender === 'male'}
            />
            <label htmlFor="male" className="form-check-label">
              Male
            </label>
          </div>
          <div className="form-check ms-3 mt-2">
            <input
              type="radio"
              className="form-check-input"
              id="female"
              name="gender"
              value="female"
              onChange={handleChange}
              checked={formData.gender === 'female'}
            />
            <label htmlFor="female" className="form-check-label">
              Female
            </label>
          </div>
        </div>

        <div  className="mt-2">
          <label htmlFor="password" className="form-label" style={{ fontWeight: 'bold' }}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your Password"
            required
          />
        </div>

        <div  className="mt-2">
          <label htmlFor="confirmPassword" className="form-label" style={{ fontWeight: 'bold' }}>
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Enter your confirmPassword"
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
