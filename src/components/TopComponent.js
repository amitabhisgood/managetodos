import React from 'react';
import './App2.css';

const TopComponent = ({ handleLogin, handleRegister }) => {
  return (
    <div className="top-menu">
      <ul>
        <li>User
          <ul className="submenu">
            <li onClick={handleLogin}>Login</li>
            <li onClick={handleRegister}>Register</li>
          </ul>
        </li>
        <li>Activity</li>
        <li>Search</li>
      </ul>
    </div>
  );
}

export default TopComponent;
