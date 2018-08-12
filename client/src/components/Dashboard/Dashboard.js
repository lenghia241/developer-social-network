import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileAction";
import { Link } from "react-router-dom";
import ProfileView from "./ProfileView";
import ExperienceTable from "./ExperienceTable";
import EducationTable from "./EducationTable";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick = () => {
    this.props.deleteAccount();
  };

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
        dashboardcontent = (
          <div>
            <p>
              Welcome <Link to={`/${profile.handle}`}>{user.name}</Link>
            </p>
            <ProfileView />
            <ExperienceTable experience={profile.experience} />
            <EducationTable education={profile.education} />
            <div className="row">
              <a
                onClick={this.onDeleteClick}
                className="btn-large waves-effect red waves-dark"
              >
                Delete My Account
              </a>
            </div>
          </div>
        );
      } else {
        //User is logged in but has no profile
        dashboardcontent = (
          <div>
            <p>Welcome {user.name}</p>
            <p>You have not yet setup a profile, please add some info.</p>
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
      <div className="left-align">
        <h1>Dashboard</h1>
        {dashboardcontent}
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
