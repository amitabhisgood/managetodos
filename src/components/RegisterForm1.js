import React from 'react';

const RegisterForm = () => {
    return (
        <div className="register-form">
            {/* Registration form elements here */}
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Register</button>
        </div>
    );
}

export default RegisterForm;
