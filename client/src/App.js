import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import Signup from "./components/Signup/Signup";
import PostFeed from "./components/PostFeed/PostFeed";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/post" render={() => <PostFeed />} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
