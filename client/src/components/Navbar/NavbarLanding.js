import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLanding = () => {
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
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log in</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLanding;
