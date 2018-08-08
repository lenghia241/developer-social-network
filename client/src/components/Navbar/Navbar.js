import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";
import { clearCurrentProfile } from "../../actions/profileAction";

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="right valign-wrapper">
        <li>
          <NavLink to="/post">Post Feed</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <a onClick={this.onLogoutClick}>
            <img
              src={user.avatar}
              alt={user.name}
              className="circle responsive-img"
              style={{ width: "35px", marginRight: "10px" }}
            />
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="right">
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log in</NavLink>
        </li>
      </ul>
    );

    return (
      <nav className="indigo darken-4">
        <div className="nav-wrapper">
          <ul className="left">
            <li>
              <NavLink
                to="/"
                className="logo mg-70 scale-transition transparent"
              >
                DevNet
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">Developers</NavLink>
            </li>
          </ul>

          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
