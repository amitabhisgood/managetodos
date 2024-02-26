// CenterComponent.js
import React, { useState } from 'react';
import './App1_1.css';

const CenterComponent = () => {
  const [formType, setFormType] = useState(null);

  const handleMenuClick = (type) => {
    setFormType(type);
  }

  return (
    <div className="center-body">
      {formType === 'login' && <LoginForm />}
      {formType === 'register' && <RegisterForm />}
    </div>
  );
}

const LoginForm = () => {
  return (
    <div className="form-container">
      <h2>Login Form</h2>
      <form>
        {/* Login form elements */}
      </form>
    </div>
  );
}

const RegisterForm = () => {
  return (
    <div className="form-container">
      <h2>Register Form</h2>
      <form>
        {/* Registration form elements */}
      </form>
    </div>
  );
}

export default CenterComponent;
