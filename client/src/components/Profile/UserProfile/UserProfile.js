import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getProfileByHandle } from "../../../actions/profileAction";
import ProfileHeader from "./ProfileHeader";

class UserProfile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  render() {
    const { profile, loading } = this.props.profile;

    let profileContent;
    if (profile === null || loading) {
      profileContent = (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    } else {
      profileContent = (
        <div className="row">
          <div className="row">
            <Link to="/profile" className="btn waves-effect waves-light left">
              Back To Profiles
            </Link>
          </div>
          <ProfileHeader profile={profile} />
        </div>
      );
    }
    return <Fragment>{profileContent}</Fragment>;
  }
}

UserProfile.propsTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(UserProfile);
