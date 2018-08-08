import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { registerUser } from "../../actions/authAction";

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <Fragment>
        <div className="row container">
          <h1>Sign Up</h1>
          <p>Create your DevNet account</p>
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="name"
                  type="text"
                  className={errors.name ? "invalid" : "validate"}
                  name="name"
                  value={this.state.name}
                  onChange={this.onChangeInput}
                />
                <label htmlFor="name">Full Name</label>
                <span className="helper-text left" data-error={errors.name} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                <input
                  id="email"
                  type="email"
                  className={errors.email ? "invalid" : "validate"}
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeInput}
                />
                <label htmlFor="email">Email</label>
                <span className="helper-text left" data-error={errors.email}>
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input
                  id="password"
                  type="password"
                  className={errors.password ? "invalid" : "validate"}
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangeInput}
                />
                <label htmlFor="password">Password</label>
                <span
                  className="helper-text left"
                  data-error={errors.password}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input
                  id="password2"
                  type="password"
                  className={errors.password2 ? "invalid" : "validate"}
                  name="password2"
                  value={this.state.password2}
                  onChange={this.onChangeInput}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span
                  className="helper-text left"
                  data-error={errors.password2}
                />
              </div>
            </div>
            <button
              className="btn-large waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));
