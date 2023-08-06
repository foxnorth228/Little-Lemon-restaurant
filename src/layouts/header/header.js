import React from 'react';
import logo from '../../assets/Logo.svg';

const Header = ({ children }) => {
    return (
        <header>
            <img alt="logo" src={logo} />
            {children}
        </header>
    );
}

export default Header;
