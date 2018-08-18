import axios from "axios";

import * as types from "../constants/ActionTypes";

// Add post
export const addPost = postData => dispatch => {
  axios
    .post("api/posts", postData)
    .then(res =>
      dispatch({
        type: types.ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Get Posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("api/posts")
    .then(res =>
      dispatch({
        type: types.GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: null
      })
    );
};

//Get Post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res => {
      dispatch({
        type: types.GET_POST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: types.GET_ERRORS,
        payload: null
      });
    });
};

//Delete Post
export const deletePost = id => dispatch => {
  axios
    .delete(`api/posts/${id}`)
    .then(res =>
      dispatch({
        type: types.DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Add Like
export const addLike = id => dispatch => {
  axios
    .post(`api/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Remove Like
export const removeLike = id => dispatch => {
  axios
    .post(`api/posts/unlike/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add comment
export const addComment = (postId, commentData) => dispatch => {
  axios
    .post(`/api/posts/comment/${postId}`, commentData)
    .then(res =>
      dispatch({
        type: types.GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete comment
export const deleteComment = (postId, commentId) => dispatch => {
  axios
    .delete(`/api/posts/comment/${postId}/${commentId}`)
    .then(res =>
      dispatch({
        type: types.GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set page Loading
export const setPostLoading = () => {
  return {
    type: types.POST_LOADING
  };
};
