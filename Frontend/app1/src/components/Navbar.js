import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">Services</a>
          </li> */}
          {/* <li className="nav-item dropdown"> */}
            {/* <a className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a> */}
            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" href="/">Action</Link>
              <Link className="dropdown-item" href="/">Another action</Link>
              <Link className="dropdown-item" href="/">Something else here</Link>
            </div> */}
          {/* </li> */}
        </ul>
      </div>
      <div className={`form-check form-switch text-${props.textColor}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </nav>
  )
}
Navbar.propType = {
  title: PropTypes.string.isRequired
}
// Navbar.defaultProps = {
//   title: 'Set Title Here'
// }