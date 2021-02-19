import React, { useContext }  from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "./components/feed/Settings"
import Profile from "./components/feed/Profile"
import Main from "./components/feed/Main"
import { UserContext } from './context/UserProvider.js'
import Auth from "./components/entry/Auth"
import "./styles.css";

export default function App() {
  const { token } = useContext(UserContext)
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={token ? Main : Auth } />
        <Route exact path="/Profile" render={Profile} />
        <Route path="/Main" render={Main} />
        <Route path="/Settings" render={Settings} />
        </Switch>
      </Router>
    </div>
  );
};


