import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import TextFieldGroup from "../../../common/TextFieldGroup";
import { addExperience } from "../../../actions/profileAction";

class AddExperience extends Component {
  state = {
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
    errors: {},
    disabled: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
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
      company,
      title,
      location,
      from,
      to,
      current,
      description
    } = this.state;
    const expData = {
      company,
      title,
      location,
      from,
      to,
      current,
      description
    };
    this.props.addExperience(expData, this.props.history);
  };

  onCheck = e => {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="row">
        <Link to="/dashboard" className="btn waves-effect waves-light left">
          Go Back
        </Link>
        <h1>Add Experience</h1>
        <p>
          Add any developer/programming positions that you have had in the past
          or current
        </p>
        <div className="row left-align">
          <p>* = required field</p>
        </div>

        <form className="col s12" onSubmit={this.onSubmit}>
          <TextFieldGroup
            name="company"
            value={this.state.company}
            label="* Company"
            onChange={this.onChange}
            icon="account_balance"
            error={errors.company}
          />

          <TextFieldGroup
            name="title"
            value={this.state.title}
            label="* Job Title"
            onChange={this.onChange}
            icon="assignment_ind"
            error={errors.title}
          />

          <TextFieldGroup
            name="location"
            value={this.state.location}
            label="* Location"
            onChange={this.onChange}
            icon="location_on"
            error={errors.location}
          />

          <div className="row">
            <label htmlFor="from" className="flow-text">
              From Date
            </label>
            <div className="input-field">
              <input
                type="date"
                id="from"
                className="datepicker validate"
                value={this.state.from}
                onChange={this.onChange}
                name="from"
              />
              <span
                className="helper-text left red-text"
                data-error={errors.from}
              >
                {errors.from ? errors.from : ""}
              </span>
            </div>
          </div>

          <div className="row">
            <label htmlFor="to" className="flow-text">
              To Date
            </label>
            <input
              type="date"
              id="to"
              className="datepicker"
              value={this.state.to}
              onChange={this.onChange}
              name="to"
              disabled={this.state.disabled ? "disabled" : ""}
            />
          </div>

          <div className="row left-align">
            <label>
              <input
                type="checkbox"
                value={this.state.current}
                onChange={this.onCheck}
                name="current"
              />
              <span className="flow-text">Current Job</span>
              <span className="helper-text left" data-error={errors.current} />
            </label>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                name="description"
                value={this.state.description}
                onChange={this.onChange}
                errors={errors.description}
              />
              <label htmlFor="textarea1">Job Description</label>
              <span
                className="helper-text left"
                data-error={errors.description}
              >
                Tell us more about your job
              </span>
            </div>
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addExperience }
)(withRouter(AddExperience));
