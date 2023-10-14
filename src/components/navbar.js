import React, { useState } from 'react';
import { ReactComponent as Hamburger } from '../hamburger.svg'
import { ReactComponent as Brand } from '../colris.svg'

const menus = [
  {id:'home', title: 'Home'},
  {id:'dooh', title: 'DOOH'},
  {id:'retail', title: 'Retail Ads'},
  {id:'contact', title: 'Reach Us'}
]

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
          <ul>{menus.map(x => (<li key={x.id}>
            <a href={`#${x.id}`}>{x.title}</a>
          </li>))}
          </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar