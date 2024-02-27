// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [info, setInfo] = useState('');
  const [invariant, setInvariant] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserName('amit6');
    setFirstName('Amitabh');
    setMiddleName('.');
    setLastName('Choudhury');
    setPassword('amit6');
    setEmail('amitabh.choudhury@gmail.com');
    setInfo('Sample');
    setInvariant('id');
      try {
      const response = await axios.get('https://localhost:7085/Register/Create');
      const responseData = response.data;
      const parser = new DOMParser();
      const htmlDocument = parser.parseFromString(responseData, 'text/html');
      const rvt = htmlDocument.querySelector('input[name="__RequestVerificationToken"]').value;
      console.log("rvt:", rvt); // Show __RequestVerificationToken on console
      const pid = Math.floor(Math.random() * 1000000);
      console.log("pid:", pid); 
      const postData = new URLSearchParams();
      postData.append("id", pid);
      postData.append("__Invariant",'id')
      postData.append("Username", 'amit6');
      postData.append("Fname", 'Amitabh');
      postData.append("Mname", '.');
      postData.append("Lname", 'Choudhury');
      postData.append("Password", 'amit6');
      postData.append("Email", 'amitabh.choudhury@gmail.com');
      postData.append("Info", 'Sample');
      postData.append("__RequestVerificationToken", rvt);

      const formData = new FormData();
      formData.append('id', pid);
      formData.append('Username', userName);
      formData.append('Fname', firstName);
      formData.append('Mname', middleName);
      formData.append('Lname', lastName);
      formData.append('Password', password);
      formData.append('Email', email);
      formData.append('Info', info);
      formData.append('__RequestVerificationToken', rvt);
      console.log("URL:", 'https://localhost:7085/Register/Create');
      const fd = formData.get('id');
      console.log("FormData:", fd); 
      const fd1 = formData.get('Username');
      console.log("FormData:", fd1); 
      const fd2 = formData.get('Fname');
      console.log("FormData:", fd2); 
      const fd3 = formData.get('Mname');
      console.log("FormData:", fd3); 
      const fd4 = formData.get('Lname');
      console.log("FormData:", fd4); 
      const fd5 = formData.get('Password');
      console.log("FormData:", fd5); 
      const fd6 = formData.get('Email'); 
      console.log("FormData:", fd6); 
      const fd7 = formData.get('Info');
      console.log("FormData:", fd7); 
      const postResponse = await axios.post('https://localhost:7085/Register/Create', postData);
//      const postResponse = await axios.post('https://localhost:7085/Register/Create', formData, {
//        headers: {
//          'Content-Type': 'multipart/form-data', // Example header
//        }
//      });
      console.log("Response:", postResponse.data);
    } catch (error) {
      console.error('Error:', error);
      // Handle error here
    }
};


  
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div>
      <form style={{top:'40%'}} onSubmit={handleSubmit}>
        <input type="text" placeholder="User Name" value={userName} onChange={(e) => setUserName(e.target.value)} required></input><br/>
        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required /><br/>
        <input type="text" placeholder="Middle Name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} /><br/>
        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required /><br/>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
        <input type="text" placeholder="Info" value={info} onChange={(e) => setInfo(e.target.value)} required /><br/>
        <button type="submit">Register</button><br/>
      </form> 
      <button type="submit" onClick={handleSubmit}>Go</button><br/>
      <p>{response}</p>
    </div>
  );
};

export default RegistrationForm;
