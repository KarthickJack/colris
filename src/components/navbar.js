import React, { useState } from 'react';
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
              {/* <Link to="/home">Home</Link> */}
              <a href={`#home`}>Home</a>
            </li>
           
            <li>
              {/* <Link to="/services">Services</Link> */}
              <a href={`#more`}>Domain</a>
            </li>
            <li>
              {/* <Link to="/book_slots">DOOH</Link> */}
              <a href={`#dooh`}>DOOH</a>
            </li>
            <li>
              {/* <Link to="/retail">Retail Ads</Link> */}
              <a href={`#retail`}>Retail Ads</a>
            </li>
            <li>
              {/* <Link to="/reach_us">Reach Us</Link> */}
              <a href={`#contact`}>Reach Us</a>
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