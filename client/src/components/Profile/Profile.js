import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profileAction";

export class Profile extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(item => (
          <ProfileItem key={item._id} profile={item} />
        ));
      } else {
        profileItems = <h4>No profiles found...</h4>;
      }
    }
    return (
      <div className="footer">
        <h1>Developer Profiles</h1>
        <p>Browse and connect with developers</p>
        <div className="row">{profileItems}</div>
      </div>
    );
  }
}

Profile.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profile);
