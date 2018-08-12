import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../actions/profileAction";

class EducationTable extends Component {
  onDeleteClick = id => {
    this.props.deleteEducation(id);
  };

  render() {
    const education = this.props.education.map(edu => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td>{edu.degree}</td>
        <td>
          <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{" "}
          {edu.to === null ? (
            " Present"
          ) : (
            <Moment format="DD/MM/YYYY">{edu.to}</Moment>
          )}
        </td>
        <td>
          <a
            onClick={() => this.onDeleteClick(edu._id)}
            className="btn waves-effect red waves-dark"
          >
            Delete
          </a>
        </td>
      </tr>
    ));
    return (
      <div className="row">
        <h4>Education Credentials</h4>
        <table className="highlight responsive-table">
          <thead>
            <tr>
              <th>School</th>
              <th>Degree</th>
              <th>Study date</th>
              <th />
            </tr>
          </thead>

          <tbody>{education}</tbody>
        </table>
      </div>
    );
  }
}

EducationTable.propTypes = {
  deleteEducation: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteEducation }
)(EducationTable);
