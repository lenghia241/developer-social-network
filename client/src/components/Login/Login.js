import React, { Fragment, Component } from "react";
import NavbarLanding from "../Navbar/NavbarLanding";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(user);
  };

  render() {
    return (
      <Fragment>
        <NavbarLanding />
        <div className="row container">
          <h1>Log In</h1>
          <p>Sign in to your DevNet account</p>
          <form className="col s12" onSubmit={this.onSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">email</i>
                <input
                  id="email"
                  type="email"
                  className="validate"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChangeInput}
                />
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input
                  id="password"
                  type="password"
                  className="validate"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChangeInput}
                />
                <label htmlFor="password">Password</label>
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

export default Login;
