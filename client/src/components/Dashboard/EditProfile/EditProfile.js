import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../../../common/TextFieldGroup";
import { withRouter, Link } from "react-router-dom";
import isEmpty from "../../../validation/is-empty";

import {
  createNewProfile,
  getCurrentProfile
} from "../../../actions/profileAction";

class EditProfile extends Component {
  state = {
    displaySocialInputs: false,
    handle: "",
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    githubusername: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
    errors: {}
  };

  componentDidMount() {
    this.props.getCurrentProfile();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }

    if (nextProps.profile.profile) {
      const profile = nextProps.profile.profile;

      //Bring skills array back to string with coma.
      const skillsString = profile.skills.join(",");

      // if Profile field doesnt exist make empty string
      let {
        handle,
        status,
        company,
        website,
        location,
        githubusername,
        bio,
        social,
        twitter,
        facebook,
        instagram,
        youtube,
        linkedin
      } = profile;
      company = !isEmpty(company) ? company : "";
      website = !isEmpty(website) ? website : "";
      location = !isEmpty(location) ? location : "";
      githubusername = !isEmpty(githubusername) ? githubusername : "";
      bio = !isEmpty(bio) ? bio : "";
      social = !isEmpty(social) ? social : {};
      twitter = !isEmpty(social.twitter) ? social.twitter : "";
      facebook = !isEmpty(social.facebook) ? social.facebook : "";
      instagram = !isEmpty(social.instagram) ? social.instagram : "";
      youtube = !isEmpty(social.youtube) ? social.youtube : "";
      linkedin = !isEmpty(social.linkedin) ? social.linkedin : "";

      // Set component fields state
      this.setState({
        handle,
        company,
        website,
        location,
        status,
        skills: skillsString,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const {
      displaySocialInputs,
      handle,
      company,
      website,
      location,
      status,
      skills,
      githubusername,
      bio,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
      errors
    } = this.state;

    const profileData = {
      displaySocialInputs,
      handle,
      company,
      website,
      location,
      status,
      skills,
      githubusername,
      bio,
      twitter,
      facebook,
      linkedin,
      youtube,
      instagram,
      errors
    };
    this.props.createNewProfile(profileData, this.props.history);
  };

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div className="row">
          <TextFieldGroup
            name="facebook"
            label="Facebook"
            value={this.state.facebook}
            error={errors.facebook}
            onChange={this.onChange}
          />
          <TextFieldGroup
            name="twitter"
            label="Twitter"
            value={this.state.twitter}
            error={errors.twitter}
            onChange={this.onChange}
          />
          <TextFieldGroup
            name="linkedin"
            label="Linkedin"
            value={this.state.linkedin}
            error={errors.linkedin}
            onChange={this.onChange}
          />
          <TextFieldGroup
            name="instagram"
            label="Instagram"
            value={this.state.instagram}
            error={errors.instagram}
            onChange={this.onChange}
          />
        </div>
      );
    }

    return (
      <div className="row">
        <Link to="/dashboard" className="btn waves-effect waves-light left">
          Go Back
        </Link>
        <h1>Edit Profile</h1>
        <form className="col s12" onSubmit={this.onSubmit}>
          <TextFieldGroup
            name="handle"
            value={this.state.handle}
            label="* Profile Handle"
            onChange={this.onChange}
            icon="insert_link"
            error={errors.handle}
            info="A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)"
          />

          <div className="input-field col s12">
            <select
              className="browser-default"
              value={this.state.status}
              name="status"
              onChange={this.onChange}
            >
              <option value="" disabled defaultValue>
                * Select Professional Status
              </option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor or Teacher">
                Instructor or Teacher
              </option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <span className="helper-text left red-text">
              {errors.status ? errors.status : ""}
            </span>
            <span
              className={
                errors.status ? "helper-text left red-text" : "helper-text left"
              }
            >
              {errors.status
                ? errors.status
                : "Give us an idea of where you are at in your career"}
            </span>
          </div>

          <TextFieldGroup
            name="company"
            value={this.state.company}
            label="Company"
            onChange={this.onChange}
            icon="account_balance"
            info="Could be your own company or one you work for"
          />

          <TextFieldGroup
            name="website"
            value={this.state.website}
            label="Website"
            onChange={this.onChange}
            icon="language"
            info="Could be your own or a company website"
          />

          <TextFieldGroup
            name="location"
            value={this.state.location}
            label="Location"
            onChange={this.onChange}
            icon="location_on"
            info="City & state suggested (eg. Boston, MA)"
          />

          <TextFieldGroup
            name="skills"
            value={this.state.skills}
            label="* Skills"
            onChange={this.onChange}
            error={errors.skills}
            icon="format_list_bulleted"
            info="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
          />

          <TextFieldGroup
            name="githubusername"
            value={this.state.githubusername}
            label="Github Username"
            onChange={this.onChange}
            icon="code"
            info="If you want your latest repos and a Github link, include your username"
          />

          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="bio"
                id="textarea2"
                className="materialize-textarea"
                value={this.state.bio}
                onChange={this.onChange}
                data-length="120"
              />
              <label className="active" htmlFor="textarea2">
                A short bio of yourself
              </label>
            </div>
          </div>

          <div className="row">
            <a
              className="btn waves-effect waves-light left"
              onClick={() => {
                this.setState({
                  displaySocialInputs: !this.state.displaySocialInputs
                });
              }}
            >
              Add Social Network Links
            </a>
            {socialInputs}
          </div>
          <div className="row">
            <button
              className="btn-large waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

EditProfile.propTypes = {
  createNewProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
    errors: state.errors
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { createNewProfile, getCurrentProfile }
  )(EditProfile)
);
