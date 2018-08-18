import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPost } from "../../../actions/postAction";
import { Link } from "react-router-dom";
import PostItem from "../PostView/PostItem";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";

class SinglePost extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
    console.log(this.props.match.params.id);
  }
  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
          <CommentFeed postId={post._id} comments={post.comment} />
        </div>
      );
    }
    return (
      <div className="row">
        <Link to="/post" className="btn waves-efect waves-light left">
          Back To Feed
        </Link>
        {postContent}
      </div>
    );
  }
}

SinglePost.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(SinglePost);
