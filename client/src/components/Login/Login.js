import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authAction";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="row">
        <h1>Log In</h1>
        <p>Sign in to your DevNet account</p>
        <form className="col s12" onSubmit={this.onSubmit}>
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
              <span className="helper-text left" data-error={errors.email} />
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
              <span className="helper-text left" data-error={errors.password} />
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
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
