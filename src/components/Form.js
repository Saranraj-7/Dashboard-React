import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
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
    <div className="container pt-3 px-5 ">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label htmlFor="firstName" className="form-label" >
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="FirstName"
            required
          />
        </div>

        <div className="mt-2">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="LastName"
            required
          />
        </div>

        <div className="mt-2">
          <label htmlFor="email" className="form-label" >
            Gmail
          </label>
          <input
            type="gmail"
            className="form-control"
            id="gmail"
            name="gmail"
            value={formData.email}
            onChange={handleChange}
            placeholder="Gmail"
            required
          />
        </div>



        <div className="mt-2">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>

        <div className="mt-2">
          <label htmlFor="State" className="form-label" >
            State
          </label>
          <input
            type="Text"
            className="form-control"
            id="State"
            name="State"
            value={formData.Pincode}
            onChange={handleChange}
            placeholder="State"
            required
          />
        </div>

        <div className="mt-2">
          <label htmlFor="State" className="form-label" >
            Pincode
          </label>
          <input
            type="Text"
            className="form-control"
            id="Pincode"
            name="Pincode"
            value={formData.Pincode}
            onChange={handleChange}
            placeholder="Pincode"
            required
          />
        </div>


        <div className="mt-3">

          <Form.Check
            className='form-group'
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </div>



        <button type="submit" className="btn btn-primary mt-2 mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
