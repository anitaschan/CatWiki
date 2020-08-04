import React from "react";
import Store from "./context/store";
import "./App.css";
import { Home, Profile, TopTen } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

const Border = styled.div`
  padding: 40px;
`;

const App = () => {
  return (
    <Store>
      <Router>
        <Border>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/topten">
              <TopTen />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </Border>
      </Router>
    </Store>
  );
};

export default App;
