import React, { Component, Fragment } from "react";
import isEmpty from "../../../validation/is-empty";
import Moment from "react-moment";

class ProfileHeader extends Component {
  //State for github API
  state = {
    clientId: "3c4b2d09a80c1d8edd6c",
    clientSecret: "5e14a5d9b5335eebfc2b5b1b930055594bd5771c",
    count: 5,
    sort: "created: asc",
    repos: []
  };

  componentDidMount() {
    const username = this.props.profile.githubusername;
    const { count, sort, clientId, clientSecret } = this.state;
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ repos: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const {
      user,
      social,
      skills,
      bio,
      company,
      website,
      location,
      status,
      githubusername,
      education,
      experience
    } = this.props.profile;
    const firstName = user.name.trim().split(" ")[0];

    const skillsMap = skills.map((skill, index) => (
      <div className="chip" key={index}>
        {skill}
      </div>
    ));

    const expMap = experience.map(exp => (
      <Fragment key={exp._id}>
        <div className="card-content left-align">
          <h5>{exp.company}</h5>
          <p>
            <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
            {exp.to === null ? (
              "Present"
            ) : (
              <Moment format="DD/MM/YYYY">{exp.to}</Moment>
            )}
          </p>
          <p>
            <strong>Position: </strong>
            {exp.title}
          </p>
          {exp.location === "" ? null : (
            <p>
              <strong>Location: </strong>
              {exp.location}
            </p>
          )}
          {exp.description === "" ? null : (
            <p>
              <strong>Description: </strong>
              {exp.description}
            </p>
          )}
        </div>
      </Fragment>
    ));

    const eduMap = education.map(edu => (
      <Fragment key={edu._id}>
        <div className="card-content left-align">
          <h5>{edu.school}</h5>
          <p>
            <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
            {edu.to === null ? (
              "Present"
            ) : (
              <Moment format="DD/MM/YYYY">{edu.to}</Moment>
            )}
          </p>
          <p>
            <strong>Degree: </strong>
            {edu.degree}
          </p>
          <p>
            <strong>Field of Study: </strong>
            {edu.feildofstudy}
          </p>
          {edu.description === "" ? null : (
            <p>
              <strong>Description: </strong>
              {edu.description}
            </p>
          )}
        </div>
      </Fragment>
    ));

    let githubcontent = this.state.repos.map(repo => (
      <div className="col s12" key={repo.id}>
        <div className="card-panel row">
          <div className="card-content col s6">
            <h4>
              <a href={repo.html_url} target="_blank">
                {repo.name}
              </a>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="card-content col s6">
            <div className="chip blue white-text">
              Stars: {repo.stargazers_count}
            </div>
            <div className="chip grey white-text">
              Watchers: {repo.watchers}
            </div>
            <div className="chip green white-text">
              Folk: {repo.forks_count}
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div className="row">
        <div className="row">
          <div className="col s12">
            <div className="card-panel teal white-text z-depth-1">
              <img
                className="circle responsive-img"
                src={user.avatar}
                alt={user.name}
              />
              <h1>{user.name}</h1>
              <span>
                {status} {isEmpty(company) ? null : <span>at {company}</span>}
              </span>
              {isEmpty(location) ? null : <p>{location}</p>}

              <div className="row flow-text social-icons">
                {isEmpty(website) ? null : (
                  <a className="white-text" href={website} target="_blank">
                    <i className="fas fa-home" />
                  </a>
                )}

                {isEmpty(social && social.facebook) ? null : (
                  <a
                    className="white-text"
                    href={social.facebook}
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square" />
                  </a>
                )}

                {isEmpty(social && social.twitter) ? null : (
                  <a
                    className="white-text"
                    href={social.twitter}
                    target="_blank"
                  >
                    <i className="fab fa-twitter-square" />
                  </a>
                )}

                {isEmpty(social && social.linkedin) ? null : (
                  <a
                    className="white-text"
                    href={social.linkedin}
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                )}

                {isEmpty(social && social.instagram) ? null : (
                  <a
                    className="white-text"
                    href={social.instagram}
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div className="card z-depth-1">
              <div className="card-content">
                <h3 className="teal-text">
                  {firstName}
                  's Bio
                </h3>
                {isEmpty(bio) ? <p>No bio yet...</p> : <p>{bio}</p>}
              </div>
              <div className="divider" />
              <div className="card-content">
                <h3 className="teal-text">Skills Set</h3>
                {skillsMap}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <div className="card-panel z-depth-1">
              <h3 className="teal-text">Experience</h3>
              {expMap}
            </div>
          </div>

          <div className="col s6">
            <div className="card-panel z-depth-1">
              <h3 className="teal-text">Education</h3>
              {eduMap}
            </div>
          </div>
        </div>

        <div className="row">
          <h3>Latest Github Repos</h3>
          {githubusername === "" ? (
            <p>There is no repos or username is not valid.</p>
          ) : (
            githubcontent
          )}
        </div>
      </div>
    );
  }
}

export default ProfileHeader;
