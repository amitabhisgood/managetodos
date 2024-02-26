import React from 'react';
import './App2.css';

const CenterComponent = ({ formComponent }) => {
  return (
    <div className="center-body">
      {formComponent}
    </div>
  );
}

export default CenterComponent;
