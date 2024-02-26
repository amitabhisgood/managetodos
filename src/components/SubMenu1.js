import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const SubMenu = ({ menu }) => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowRegister(false);
    };

    const handleRegisterClick = () => {
        setShowRegister(true);
        setShowLogin(false);
    };

    return (
        <ul className="submenu">
            <li onClick={handleLoginClick}>Login</li>
            <li onClick={handleRegisterClick}>Register</li>
            {showLogin && <LoginForm />}
            {showRegister && <RegisterForm />}
        </ul>
    );
}

export default SubMenu;
