import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Footer.scss'

export const Footer = () => (
  <div className="ui inverted vertical footer segment">
    <div className="ui container">
      <div className="ui inverted stackable grid">
        <div>
          <p>© 2017 make order easy</p>
        </div>
          <div style={{position: 'absolute', right:'5%' }}>
          <a href="#" className="item" style={{marginRight:'20px'}}>Facebook</a>
          <a href="#" className="item" style={{marginRight:'20px'}}>Twitter</a>
          <a href="#" className="item">Github</a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
