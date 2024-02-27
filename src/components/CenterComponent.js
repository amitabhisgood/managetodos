import React from 'react';
import './App2.css';

const CenterComponent = ({ formComponent }) => {
  return (
    <div className="center-container">
      <div className="center-content">
        {formComponent}
      </div>
    </div>
  );
}

export default CenterComponent;
