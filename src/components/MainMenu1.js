import React, { useState } from 'react';
import SubMenu from './SubMenu';

const MainMenu = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('');

    const handleMouseEnter = (menu) => {
        setSelectedMenu(menu);
        setShowSubMenu(true);
    };

    const handleMouseLeave = () => {
        setShowSubMenu(false);
    };

    return (
        <nav>
            <ul className="menu">
                <li onMouseEnter={() => handleMouseEnter('User')} onMouseLeave={handleMouseLeave}>
                    <a href="#">User</a>
                    {showSubMenu && selectedMenu === 'User' && <SubMenu menu={selectedMenu} />}
                </li>
                <li onMouseEnter={() => handleMouseEnter('Activity')} onMouseLeave={handleMouseLeave}>
                    <a href="#">Activity</a>
                    {showSubMenu && selectedMenu === 'Activity' && <SubMenu menu={selectedMenu} />}
                </li>
                <li onMouseEnter={() => handleMouseEnter('Search')} onMouseLeave={handleMouseLeave}>
                    <a href="#">Search</a>
                    {showSubMenu && selectedMenu === 'Search' && <SubMenu menu={selectedMenu} />}
                </li>
            </ul>
        </nav>
    );
}

export default MainMenu;
