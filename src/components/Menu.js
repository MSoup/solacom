import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/landing">
            Omni Oculus Project
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/generic">
            Generic
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/elements">
            Elements
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/test">
            Test
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <div className="button special fit">
            <Link onClick={props.onToggleMenu} to="/contact">
              Contact Us
            </Link>
          </div>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
