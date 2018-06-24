import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Posts from "./components/Posts";
import PostsNew from "./components/PostsNew";
import PostsShow from "./components/PostsShow";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/posts/new" component={PostsNew} />
              <Route exact path="/posts/:id" component={PostsShow} />
              <Route exact path="/" component={Posts} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
