import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Footer.scss'

export const Footer = () => (
  <div className="ui inverted vertical footer segment" style={{height:'50px'}}>
    <div className="ui container">
      <div className="ui inverted stackable grid">
        <div style={{marginTop:'10px'}} >
          <p>© 2017 make order easy</p>
        </div>
          <div className="right-footer">
          <a href="#" className="right-footer-item">Facebook</a>
          <a href="#" className="right-footer-item">Twitter</a>
          <a href="#" className="right-footer-item">Github</a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
