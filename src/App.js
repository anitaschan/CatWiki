import React from "react";
import Store from "./context/store";
import "./App.css";
import { Home, Profile, TopTen } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Store>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/topten'>
            <TopTen />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </Store>
  );
};

export default App;
