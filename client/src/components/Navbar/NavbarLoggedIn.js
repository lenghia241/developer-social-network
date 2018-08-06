import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLoggedIn = () => {
  return (
    <nav className="indigo darken-4">
      <div className="nav-wrapper">
        <ul className="left">
          <li>
            <NavLink to="/" className="logo mg-70 scale-transition transparent">
              DevNet
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">Developers</NavLink>
          </li>
        </ul>

        <ul className="right">
          <li>
            <NavLink to="/post">Post Feed</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/">Logout</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLoggedIn;
