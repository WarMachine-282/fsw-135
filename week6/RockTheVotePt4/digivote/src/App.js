import React, { useContext }  from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Settings from "./components/feed/Settings"
import Profile from "./components/feed/Profile"
import Main from "./components/feed/Feed"
import { UserContext } from './context/UserProvider.js'
import Auth from "./components/entry/Auth"
import ProtectedRoute from "./components/ProtectedRoute"
import "./styles.css";

export default function App() {
  const { token } = useContext(UserContext)
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={token ? Main : Auth } />
        <ProtectedRoute exact path="/Profile" component={Profile} redirectTo="/" token={token}/>
        <ProtectedRoute path="/Main" component={Main} redirectTo="/" token={token}/>
        <ProtectedRoute path="/Settings" component={Settings} redirectTo="/" token={token}/>
        </Switch>
      </Router>
    </div>
  );
};


