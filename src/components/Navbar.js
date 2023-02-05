import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`sticky-top bg-body-tertiary navbar navbar-expand-lg  ${props.mode === "#226422" ? 'green-theme navbar-dark' : props.mode === "#b11515" ? "red-theme navbar-dark" : ' bg-'+props.mode} ${props.mode === "dark" ? "dark-theme navbar-dark" : ""}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <ul className="navbar-nav mx-4 mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Color Themes
              </a>
              <ul className="dropdown-menu">
                <li><p className="dropdown-item dropdown-CSS" id="greenModeLabel" onClick={props.selectGreenMode}>Green Mode</p></li>
                <li><p className="dropdown-item dropdown-CSS" id="redModeLabel" onClick={props.selectRedMode}>Red Mode</p></li>
              </ul>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === "light"? "dark" : "light"}`}>
            <input className="form-check-input" onClick={props.toggleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}