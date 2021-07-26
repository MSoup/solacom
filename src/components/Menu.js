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
          <Link onClick={props.onToggleMenu} to="https://solanets.com/wp/">
            Japanese Site
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/landing">
            Blog
          </Link>
        </li>

        <li>
          <Link onClick={props.onToggleMenu} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        {/* <li>
          <a href="/jointeam" className="button special fit">
            Work For Us!
          </a>
        </li> */}
        <li>
          <a href="#/" className="button fit">
            Work For Us!
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="#/">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
