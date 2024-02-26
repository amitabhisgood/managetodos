import './App.css';
import './components/App2.css';
import React, { useState } from 'react';
import TopComponent from './components/TopComponent';
import CenterComponent from './components/CenterComponent';
function App() {
  const [loginFormVisible, setLoginFormVisible] = useState(false); // State to manage the visibility of LoginForm
  return (
    <div className="App">
      <>
        <TopComponent setLoginFormVisible={setLoginFormVisible} /> {/* Pass the setLoginFormVisible function as a prop */}
        <CenterComponent loginFormVisible={loginFormVisible} /> {/* Pass the loginFormVisible state as a prop */}
      </>
    </div>
  );
}

export default App;
