import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PostForm from "./PostForm/PostForm";
import { getPosts } from "../../actions/postAction";
import PostView from "./PostView/PostView";

class PostFeed extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.post;

    let postcontent;

    if (posts === null || loading) {
      postcontent = (
        <div className="progress">
          <div className="indeterminate" />
        </div>
      );
    } else {
      postcontent = <PostView posts={posts} />;
    }

    return (
      <div className="row">
        <PostForm />
        {postcontent}
      </div>
    );
  }
}

PostFeed.propTypes = {
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(PostFeed);
