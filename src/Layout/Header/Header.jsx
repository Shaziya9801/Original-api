import React from 'react'
import '../Header/Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  let name="shaziya"
  return (
    <header>
        <nav>
            <ul>
                <li><Link to="/home-page">Home</Link></li>
                <li><Link to={`/About/${name}`}>About</Link></li>
                <li><Link to="/item">Item</Link></li>
            </ul>
        </nav>
  </header>
  )
}

export default Header