// CenterComponent.js
import React from 'react';
import './App2.css';
import LoginForm from './LoginForm1';

const CenterComponent = ({ loginFormVisible }) => { // Receive a prop to determine the visibility of LoginForm
  return (
    <div className="center-body">
      {loginFormVisible && <LoginForm />} {/* Render LoginForm if loginFormVisible is true */}
    </div>
  );
}

export default CenterComponent;