// Header.js
import React, { useState } from 'react';
import './header.css'; // Import CSS file for styling

const Header = () => {
    const [showLogin, setShowLogin] = useState(false);

    const handleMouseEnter = () => {
        setShowLogin(false); // Reset showLogin state to false on mouse enter
    };

    const handleMouseLeave = () => {
        setShowLogin(false); // Reset showLogin state to false on mouse leave
    };

    const handleLoginClick = () => {
        setShowLogin(!showLogin); // Toggle showLogin state on login click
    };

    return (
        <div className="header">
            <nav>
                <ul className="menu">
                    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <a href="#">User</a>
                        <ul className={`submenu ${showLogin ? 'show' : ''}`}>
                            <li onClick={handleLoginClick}>Login</li> {/* Call handleLoginClick on click */}
                            {showLogin && (
                                <li>
                                    <form className="login-form">
                                        {/* Your login form elements here */}
                                        <input type="text" placeholder="Username" />
                                        <input type="password" placeholder="Password" />
                                        <button type="submit">Login</button>
                                    </form>
                                </li>
                            )}
                        </ul>
                    </li>
                    <li><a href="#">Activity</a></li>
                    <li><a href="#">Search</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
