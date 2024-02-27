import './App.css';
import './components/App2.css';
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import TopComponent from './components/TopComponent';
import CenterComponent from './components/CenterComponent';
import LoginForm from './components/LoginForm1'; // Assuming LoginForm1 is the correct name of your login form component
import RegistrationForm from './components/RegistrationForm1'; // Assuming you have a RegistrationForm component

function App() {
  const [formToShow, setFormToShow] = useState(null);
  const [responseHTML, setResponseHTML] = useState(null); // State to hold response HTML

  const handleLogin = () => {
//    axios.post('https://fc97-2401-4900-1f27-ed35-a519-9e2b-5826-d6d0.ngrok-free.app/register', { /* your data */ })
      axios.get('https://localhost:7085/Register')
      .then(response => {
        setResponseHTML(response.data); // Set response HTML to state
      }) 
      .catch(error => {
        console.error('Error sending GET message to localhost:', error);
      });
  } 

  const handleRegister = () => {
    setFormToShow(<RegistrationForm />);
  }

  return (
    <div className="App">
      <>
        <TopComponent handleLogin={handleLogin} handleRegister={handleRegister} />
        <CenterComponent formComponent={formToShow || responseHTML} /> {/* Display response HTML if available */}
      </>
    </div>
  );
}

export default App;
