import logo from "../../assets/footer-logo.png";
import menu from "../../assets/menu.webp";
import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <img
              src={logo}
              className="footer__image"
              alt="Little Lemon logo"
            ></img>
            <nav className="footer__nav">
                <h1 className="footer__header">Navigation</h1>
                <ul className="footer__link">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a
                        href={menu}
                        target="_blank"
                        rel="noreferrer"
                    >
                    Menu
                    </a>
                    <a href="/reservations">Reservations</a>
                    <a href="/order">Order</a>
                    <a href="/login">Login</a>
                </ul>
            </nav>
            <address className="footer__address">
                <h1 className="footer__header">Contact</h1>
                <ul className="footer__link">
                    <li>2395 Maldove Way,</li>
                    <li>Chicago Illinois</li>
                    <br></br>
                    <li>(629)-243-6827</li>
                    <br></br>
                    <a
                        href="mailto: info@littlelemon.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                    info@littlelemon.com
                    </a>
                </ul>
            </address>
            <article>
                <h1 className="footer__header">Connect</h1>
                <ul className="footer__link">
                    <a
                        href="https://www.facebook.com/thelittlelemonshop/"
                        target="_blank"
                        rel="noreferrer"
                    >
                    Facebook
                    </a>
                    <a
                        href="https://www.instagram.com/littlelemonmoon/"
                        target="_blank"
                        rel="noreferrer"
                    >
                    Instagram
                    </a>
                </ul>
            </article>
        </footer>
    );
  }
  