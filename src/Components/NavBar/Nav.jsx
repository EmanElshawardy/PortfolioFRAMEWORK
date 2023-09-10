import React from 'react'
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
export default function Nav() {
 
  return (
    <nav className="navbar bgColor navbar-expand-lg fixed-top py-4 ">
  <div className="container">
    <Link className="navbar-brand text-white fs-2 text-uppercase fw-bolder " to={''} >Start Framework</Link>
    <button className=" navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end align-items-center text-uppercase" id="navbarNav">
      <ul className=" navbar-nav  mb-2">
        <li className="nav-item  me-3">
          <NavLink className={({ isActive }) =>isActive ? "linkActive  text-white  fw-bold  active rounded " : "nav-link text-white  fw-bold  px-2 rounded"}    to={'about'}>About</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink  className={({ isActive }) =>isActive ? "linkActive  text-white  fw-bold  active rounded" : "nav-link text-white  fw-bold  px-2 rounded" }to={'portfolio'}>Portfolio</NavLink>
        </li>
        <li className="nav-item me-3">
          <NavLink className={({ isActive }) =>isActive ? "linkActive  text-white  fw-bold  active rounded" : " nav-link text-white  fw-bold  px-2 rounded" } to={'contact'}>Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}