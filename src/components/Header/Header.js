import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="ui inverted vertical masthead center aligned segment">
    <div className="ui container" style={{backgroundColor:'#1B1C1D'}}>
      <div className="ui large secondary inverted pointing menu">
        <IndexLink to='/' activeClassName="active item" className="item">Home</IndexLink>
        <Link to='/counter' activeClassName="active item" className="item">Order</Link>
        <Link to='/contact' activeClassName="active item" className="item">Contact</Link>
      </div>
    </div>
  </div>
)

export default Header
