import React, { Component, Fragment } from "react";
import NavbarLanding from "../Navbar/NavbarLanding";

export class EditProfile extends Component {
  render() {
    return (
      <Fragment>
        <NavbarLanding />
        <div class="row container">
          <h1>Sign Up</h1>
          <p>Create your DevNet account</p>
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">account_circle</i>
                <input id="first_name" type="text" class="validate" />
                <label for="first_name">Full Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">email</i>
                <input id="email" type="email" class="validate" />
                <label for="email">Email</label>
                <span
                  class="helper-text left"
                  data-error="wrong"
                  data-success="right"
                >
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">lock</i>
                <input id="password" type="password" class="validate" />
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix">lock</i>
                <input id="re-password" type="password" class="validate" />
                <label for="re-password">Confirm Password</label>
              </div>
            </div>
            <button
              class="btn-large waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i class="material-icons right">send</i>
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default EditProfile;
