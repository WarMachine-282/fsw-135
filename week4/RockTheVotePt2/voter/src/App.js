import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Body/Header/Header"
import Main from "./components/Body/Main/Main"
import Footer from "./components/Body/Footer/Footer"
import Login from "./components/Entry/Login/Login"
import Registration from "./components/Entry/Registration/Registration"
// import Profile from "./components/Profile/Profile"
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Registration" component={Registration} />
          <Route path="/Main" component={Main} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
};

export default App;
