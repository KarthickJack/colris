import React, { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { ReactComponent as Hamburger } from '../hamburger.svg'
import { ReactComponent as Brand } from '../colris.svg'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Brand className="logo" />
        <Hamburger className="menu-icon" onClick={handleShowNavbar} />
        <div className={`nav-elements  ${showNavbar && 'active'}`} onClick={handleShowNavbar}>
          <ul>
          <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/book_slots">DOOH</Link>
            </li>
            <li>
              <Link to="/retail">Retail Ads</Link>
            </li>
            <li>
              <Link to="/reach_us">Reach Us</Link>
            </li>
            {/* <li>
              <Link to="/help">help</Link>
            </li> */}
            {/* <li>
              <Link to="/">Get Started</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar