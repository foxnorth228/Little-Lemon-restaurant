import { useState } from "react";
import Menu from "./Navigation";
import Hamburger from "../../assets/hamburger.png";
import Close from "../../assets/close.png";
import './nav.css';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <ul className="nav__icon_burger">
        <button className="nav__icon_button" onClick={handleToggle}>
          <img src={navbarOpen ? Close : Hamburger} alt="Navigation Bar" />
        </button>
      </ul>
      <Menu device="desktop" />
      {navbarOpen ? <Menu device="mobile" /> : ""}
    </nav>
  );
}
