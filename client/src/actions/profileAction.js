import axios from "axios";
import * as types from "../constants/ActionTypes";

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: types.GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: types.GET_PROFILE,
        payload: {}
      })
    );
};

//Create Profile
export const createNewProfile = (profileData, history) => dispatch => {
  axios
    .post("api/profile", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Profile Loading
export const setProfileLoading = () => {
  return {
    type: types.PROFILE_LOADING
  };
};

//Clear Profile
export const clearCurrentProfile = () => {
  return {
    type: types.CLEAR_CURRENT_PROFILE
  };
};

//Delete account & profile
export const deleteAccount = () => dispatch => {
  if (window.confirm("Are you sure? This can not be undone!")) {
    axios
      .delete("/api/profile")
      .then(res =>
        dispatch({
          type: types.SET_CURRENT_USER,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: types.GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
