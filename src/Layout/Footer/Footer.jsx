import React from 'react'
import '../Footer/Footer.css'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer>
            <nav>
                <ul>
                    <li><Link to="/www.facebook.com">www.facebook.com</Link></li>
                    <li><Link to="/www.instagram.com">www.instagram.com</Link></li>
                </ul>
            </nav>
        </footer>
    </div>
  )
}

export default Footer