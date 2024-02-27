import React, { useState } from 'react';
import './App2.css';

const TopComponent = ({ setLoginFormVisible }) => { // Receive a prop to set the visibility of LoginForm
  return (
    <div className="top-menu">
      <ul>
        <li>User
          <ul className="submenu">
            <li onClick={() => setLoginFormVisible(true)}>Login</li> {/* Call setLoginFormVisible when Login is clicked */}
            <li>Register</li>
          </ul>
        </li>
        <li>Activity</li>
        <li>Search</li>
      </ul>
    </div>
  );
}

export default TopComponent;