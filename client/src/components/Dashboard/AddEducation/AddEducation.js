import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import TextFieldGroup from "../../../common/TextFieldGroup";
import { addEducation } from "../../../actions/profileAction";

class AddEducation extends Component {
  state = {
    school: "",
    degree: "",
    fieldofstudy: "",
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
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    } = this.state;
    const eduData = {
      school,
      degree,
      fieldofstudy,
      from,
      to,
      current,
      description
    };
    this.props.addEducation(eduData, this.props.history);
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
        <h1>Add Education</h1>
        <p>Add any school, bootcamp, etc that you have attended</p>
        <div className="row left-align">
          <p>* = required field</p>
        </div>

        <form className="col s12" onSubmit={this.onSubmit}>
          <TextFieldGroup
            name="school"
            value={this.state.school}
            label="* School"
            onChange={this.onChange}
            icon="account_balance"
            error={errors.school}
          />

          <TextFieldGroup
            name="degree"
            value={this.state.degree}
            label="* Degree"
            onChange={this.onChange}
            icon="assignment_ind"
            error={errors.degree}
          />

          <TextFieldGroup
            name="fieldofstudy"
            value={this.state.fieldofstudy}
            label="* Field Of Study"
            onChange={this.onChange}
            icon="location_on"
            error={errors.fieldofstudy}
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
              <span className="flow-text">Currently Studying</span>
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
              <label htmlFor="textarea1">Education Description</label>
              <span
                className="helper-text left"
                data-error={errors.description}
              >
                Tell us more about your education
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEducation }
)(withRouter(AddEducation));
