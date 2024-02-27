import React from 'react';

const LoginForm = () => {
    return (
        <div className="login-form">
            {/* Login form elements here */}
            <input type="text" placeholder="Username" /><br/>
            <input type="password" placeholder="Password" /><br/>
            <button type="submit">Login</button>
        </div>
    );
}

export default LoginForm;
