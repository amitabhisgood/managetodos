import './App.css';
import './components/App2.css';
import React, { useState } from 'react';
import TopComponent from './components/TopComponent';
import CenterComponent from './components/CenterComponent';
import LoginForm from './components/LoginForm1';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const [formToShow, setFormToShow] = useState(null);

  const handleLogin = () => {
    setFormToShow(<LoginForm />);
  } 

  const handleRegister = () => {
    setFormToShow(<RegistrationForm />);
  }

  return (
    <div className="App">
      <>
        <TopComponent handleLogin={handleLogin} handleRegister={handleRegister} />
        <CenterComponent formComponent={formToShow} />
      </>
    </div>
  );
}

export default App;
