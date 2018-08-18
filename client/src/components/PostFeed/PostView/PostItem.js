import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../../actions/postAction";

const PostItem = props => {
  const onDelete = id => {
    props.deletePost(id);
  };

  const onLike = id => {
    props.addLike(id);
  };

  const onUnlike = id => {
    props.removeLike(id);
  };

  const { text, name, avatar, _id, user, likes } = props.post;
  const { auth } = props;

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
          {props.showActions ? (
            <div className="card-action">
              <a
                className="waves-effect waves-light"
                style={{ color: `${likes.length > 0 ? "#2695F3" : "grey"}` }}
                onClick={() => onLike(_id)}
              >
                <i className="material-icons">thumb_up</i>
                <span className="helper-text">{likes.length}</span>
              </a>
              <a
                className="waves-effect waves-light"
                style={{ color: "grey" }}
                onClick={() => onUnlike(_id)}
              >
                <i className="material-icons">thumb_down</i>
              </a>
              <Link
                to={`/postcommend/${_id}`}
                className="btn waves-effect waves-light"
              >
                Comments
              </Link>
              {user === auth.user.id ? (
                <button
                  onClick={() => onDelete(_id)}
                  className="btn waves-effect waves-light red"
                >
                  <i className="material-icons">delete</i>
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
