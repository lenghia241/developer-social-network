import React, { Component } from "react";
import ProfileItem from "./ProfileItem";

export class Profile extends Component {
  render() {
    return (
      <div className="footer">
        <h1>Developer Profiles</h1>
        <p>Browse and connect with developers</p>
        <div className="row">
          <ProfileItem />
          <ProfileItem />
          <ProfileItem />
          <ProfileItem />
          <ProfileItem />
          <ProfileItem />
        </div>
      </div>
    );
  }
}

export default Profile;
