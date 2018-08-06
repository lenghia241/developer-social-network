import React, { Component, Fragment } from "react";
import NavbarLoggedIn from "../Navbar/NavbarLoggedIn";

export class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <NavbarLoggedIn />
        <div class="container left-align">
          <h1>Dashboard</h1>
          <p>Welcome John Doe</p>
          <div class="row">
            <a
              class="btn-large waves-effect black-text darken-4 transparent waves-light"
              style={{ outline: "none", border: "none" }}
            >
              <i class="material-icons left">account_circle</i>Edit Profile
            </a>
            <a
              class="btn-large waves-effect black-text darken-4 transparent waves-light"
              style={{ outline: "none", border: "none" }}
            >
              <i class="material-icons left">business_center</i>Add Experience
            </a>
            <a
              class="btn-large waves-effect black-text darken-4 transparent waves-light"
              style={{ outline: "none", border: "none" }}
            >
              <i class="material-icons left">face</i>Add Education
            </a>
          </div>

          <div class="row">
            <h3>Experience Credentials</h3>
            <table class="highlight responsive-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Years</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                  <td>
                    <a class="btn waves-effect red waves-light">Delete</a>
                  </td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                  <td>
                    <a class="btn waves-effect red waves-light">Delete</a>
                  </td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                  <td>
                    <a class="btn waves-effect red waves-light">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="row">
            <h3>Education Credentials</h3>
            <table class="highlight responsive-table">
              <thead>
                <tr>
                  <th>School</th>
                  <th>Degree</th>
                  <th>Years</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Alvin</td>
                  <td>Eclair</td>
                  <td>$0.87</td>
                  <td>
                    <a class="btn waves-effect red waves-light">Delete</a>
                  </td>
                </tr>
                <tr>
                  <td>Alan</td>
                  <td>Jellybean</td>
                  <td>$3.76</td>
                  <td>
                    <a class="btn waves-effect red waves-light">Delete</a>
                  </td>
                </tr>
                <tr>
                  <td>Jonathan</td>
                  <td>Lollipop</td>
                  <td>$7.00</td>
                  <td>
                    <a class="btn waves-effect red waves-light">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <a class="btn-large waves-effect red waves-light">Delete My Account</a>
      </Fragment>
    );
  }
}

export default Dashboard;
