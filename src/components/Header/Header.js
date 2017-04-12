import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="container">
     <div id="logo">Fun</div>
     <div className="nav">
        <IndexLink to='/' className="nav-item" activeClassName='route--active'>Home </IndexLink>
        <Link to='/counter' className="nav-item" activeClassName='route--active'>About</Link>
        <Link to='/about' className="nav-item" activeClassName='route--active'>Contact</Link>
      </div>
  </div>
)

export default Header
