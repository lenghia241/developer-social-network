import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../actions/profileAction";

class ExperienceTable extends Component {
  onDeleteClick = id => {
    this.props.deleteExperience(id);
  };

  render() {
    const experience = this.props.experience.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{" "}
          {exp.to === null ? (
            " Present"
          ) : (
            <Moment format="DD/MM/YYYY">{exp.to}</Moment>
          )}
        </td>
        <td>
          <a
            onClick={() => this.onDeleteClick(exp._id)}
            className="btn waves-effect red waves-dark"
          >
            Delete
          </a>
        </td>
      </tr>
    ));
    return (
      <div className="row">
        <h4>Experience Credentials</h4>
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Job Title</th>
              <th>Work date</th>
              <th />
            </tr>
          </thead>

          <tbody>{experience}</tbody>
        </table>
      </div>
    );
  }
}

ExperienceTable.propTypes = {
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(ExperienceTable);
