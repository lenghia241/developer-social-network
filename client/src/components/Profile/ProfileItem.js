import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

const ProfileItem = props => {
  const { location, company, status, user, skills, handle } = props.profile;

  const skillsMap = skills.map((skill, index) => (
    <li className="collection-item" key={index}>
      {skill}
    </li>
  ));
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator responsive-img"
            src={user.avatar}
            alt={user.name}
          />
          <span className="card-title indigo-text activator profiles-card-text">
            <h3>{user.name}</h3>
          </span>
        </div>
        <div className="card-content left-align">
          <h1 className="card-title activator grey-text text-darken-4">
            {user.name}
          </h1>
          <p>
            {status} at {isEmpty(company) ? null : company}
          </p>
          <p>{location}</p>
          <div style={{ marginTop: "20px" }}>
            <Link
              to={`/userprofile/${handle}`}
              className="waves-effect waves-red btn halfway-fab z-depth-2"
            >
              View Profile
            </Link>
            <a
              style={{ marginLeft: "10px" }}
              className="waves-effect waves-light btn halfway-fab activator red z-depth-2"
            >
              Show Skills
            </a>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title black-text text-darken-4">
            Skills Set
            <i className="material-icons right">close</i>
          </span>
          <ul className="collection  black-text ">{skillsMap}</ul>
        </div>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
