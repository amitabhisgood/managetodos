import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    Username: '',
    Fname: '',
    Mname: '',
    Lname: '',
    Password: '',
    Email: '',
    Info: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7085/Register/Create', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID:</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="Username" value={formData.Username} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>First Name:</label>
          <input type="text" name="Fname" value={formData.Fname} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Middle Name:</label>
          <input type="text" name="Mname" value={formData.Mname} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input type="text" name="Lname" value={formData.Lname} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="Password" value={formData.Password} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="Email" value={formData.Email} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Info:</label>
          <input type="text" name="Info" value={formData.Info} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
