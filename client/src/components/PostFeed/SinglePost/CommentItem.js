import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../../actions/postAction";

class CommentItem extends Component {
  onDelete = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };
  render() {
    const { postId, auth } = this.props;
    const { _id, avatar, name, text, user } = this.props.comment;

    return (
      <div className="col s12">
        <div
          className="card horizontal row black-text"
          style={{ padding: "2% 0" }}
        >
          <div className="col s3 center-align post-avatar">
            <img
              className="responsive-img circle"
              alt={_id}
              src={avatar}
              style={{ width: "50%", margin: "auto" }}
            />
            <span className="helper-text">{name}</span>
          </div>
          <div className="card-stacked col s9 left-align">
            <span className="card-content flow-text">{text}</span>
          </div>
          {user === auth.user.id ? (
            <button
              onClick={() => this.onDelete(postId, _id)}
              className="btn waves-effect waves-light red"
            >
              <i className="material-icons">delete</i>
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
