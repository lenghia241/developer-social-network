import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileAction";
import { Link } from "react-router-dom";

export class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardcontent;

    if (profile === null || loading) {
      dashboardcontent = (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    } else {
      if (Object.keys(profile).length > 0) {
      } else {
        //User is logged in but has no profile
        dashboardcontent = (
          <div>
            <p>You have not yet setup a profilel, please add some info.</p>
            <Link
              to="/create-profile"
              className="btn-large waves-effect red waves-light teal darken-4"
            >
              Create Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <div className="container left-align">
          <h1>Dashboard</h1>
          <p>Welcome {user.name}</p>
          <div className="row">
            <a
              className="btn-large waves-effect black-text darken-4 transparent waves-light"
              style={{ outline: "none", border: "none" }}
            >
              <i className="material-icons left">account_circle</i>Edit Profile
            </a>
            <a
              className="btn-large waves-effect black-text darken-4 transparent waves-light"
              style={{ outline: "none", border: "none" }}
            >
              <i className="material-icons left">business_center</i>Add
              Experience
            </a>
            <a
              className="btn-large waves-effect black-text darken-4 transparent waves-light"
              style={{ outline: "none", border: "none" }}
            >
              <i className="material-icons left">face</i>Add Education
            </a>
          </div>

          {dashboardcontent}
        </div>
        <a className="btn-large waves-effect red waves-light">
          Delete My Account
        </a>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
