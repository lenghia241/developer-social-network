import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authAction";

import PrivateRoute from "./common/PrivateRoute";

import store from "./store";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import PostFeed from "./components/PostFeed/PostFeed";
import Navbar from "./components/Navbar/Navbar";
import { clearCurrentProfile } from "./actions/profileAction";
import CreateProfile from "./components/Dashboard/CreateProfile/CreateProfile";
import EditProfile from "./components/Dashboard/EditProfile/EditProfile";
import AddExperience from "./components/Dashboard/AddExperience/AddExperience";
import AddEducation from "./components/Dashboard/AddEducation/AddEducation";
import UserProfile from "./components/Profile/UserProfile/UserProfile";
import NotFound from "./common/NotFound";
import SinglePost from "./components/PostFeed/SinglePost/SinglePost";

//Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and is authenticated
  store.dispatch(setCurrentUser(decoded));
  //Check expire token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //Todo: Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/userprofile/:handle" component={UserProfile} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/post" component={PostFeed} />
            <PrivateRoute path="/postcommend/:id" component={SinglePost} />
            <PrivateRoute path="/create-profile" component={CreateProfile} />
            <PrivateRoute path="/edit-profile" component={EditProfile} />
            <PrivateRoute path="/add-experience" component={AddExperience} />
            <PrivateRoute path="/add-education" component={AddEducation} />
            <Route path="/notfound" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
