import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className="ui inverted vertical masthead center aligned segment">
    <div className="ui container" style={{backgroundColor:'#1B1C1D'}}>
      <div className="ui large secondary inverted pointing menu">
        <Link to='/' activeClassName="active item" className="item">Home</Link>
        <Link to='/about' activeClassName="active item" className="item">About</Link>
        <Link to='/contact' activeClassName="active item" className="item">Contact</Link>
        <div className="right item">
          <a className="ui inverted button" style={{marginRight:'20px'}}>Log in</a>
          <a className="ui inverted button">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
)

export default Header
