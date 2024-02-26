// TopComponent.js
import React from 'react';
import './App2.css';

const TopComponent = () => {
  return (
    <div className="top-menu">
      <ul>
        <li>User
          <ul className="submenu">
            <li>Login</li>
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
