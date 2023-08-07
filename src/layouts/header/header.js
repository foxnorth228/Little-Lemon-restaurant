import React from 'react';
import './header.css';
import Nav from '../../components/nav/nav';
import logo from '../../assets/Logo.svg';

const Header = ({ children }) => {
    return (
        <header className='header'>
            <img alt="logo" src={logo} className='header__image'/>
            <Nav />
        </header>
    );
}

export default Header;
