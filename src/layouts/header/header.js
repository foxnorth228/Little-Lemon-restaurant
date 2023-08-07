import React from 'react';
import './header.css';
import logo from '../../assets/Logo.svg';

const Header = ({ children }) => {
    return (
        <header className='header'>
            <img alt="logo" src={logo} className='header__image'/>
            {children}
        </header>
    );
}

export default Header;
