import React from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";

const PostView = props => {
  const { posts } = props;
  console.log(posts);
  const postsMap = posts.map(post => <PostItem key={post._id} post={post} />);

  return <div className="row">{postsMap}</div>;
};

PostView.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostView;
