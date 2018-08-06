import React, { Component } from "react";
import { Link } from "react-router-dom";
import Particles from "react-particles-js";
import NavbarLanding from "../Navbar/NavbarLanding";
import Tilt from "react-tilt";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
};

export class Landing extends Component {
  render() {
    return (
      <div>
        <NavbarLanding />

        <Tilt
          className="Tilt z-depth-4 tilt-text center white-text"
          style={{ height: "15%", width: "60%" }}
        >
          <div className="Tilt-inner">
            <h1>Developers Network</h1>
            <p>
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
          </div>
        </Tilt>

        <div className="landing-button">
          <Link
            to="/login"
            className="waves-effect waves-light btn-large z-depth-4 blue darken-2"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="waves-effect waves-light btn-large z-depth-4"
          >
            Register
          </Link>
        </div>

        <Particles params={particlesOptions} className="particles" />
      </div>
    );
  }
}

export default Landing;