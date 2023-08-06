import React from 'react';
import logo from '../../assets/Logo.svg';

const Footer = () => {
    return (
        <footer>
            <img alt="logo" src={logo} />
            <div>
                <h3>Doormat Navigation</h3>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Menu</a>
                        </li>
                        <li>
                            <a href="/">Reservations</a>
                        </li>
                        <li>
                            <a href="/">Order online</a>
                            </li>
                        <li>
                            <a href="/">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <h3>Contact</h3>
                <address>
                    <ul>
                        <li>Address</li>
                        <li>Email</li>
                        <li>Phone</li>
                    </ul>
                </address>
            </div>
            <div>
                <h3>Social media links</h3>
                <address>
                    <ul>
                        <li>Address</li>
                        <li>Email</li>
                        <li>Phone</li>
                    </ul>
                </address>
            </div>
        </footer>
    );
}

export default Footer;
