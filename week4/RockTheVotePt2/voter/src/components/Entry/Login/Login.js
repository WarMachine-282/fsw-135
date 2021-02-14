import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Welcome To DigiVote!</h2>
            <h4 className="animation a2">
              Log in to your account using username and password
            </h4>
          </div>
          <form action="">
            <div className="form">
              <input
                type="username"
                className="form-field animation a3"
                placeholder="Username"
              />
              <input
                type="password"
                className="form-field animation a4"
                placeholder="Password"
              />
              <Link to="Main">
                <button id="lgn-btn" className="animation a5">
                  LOGIN
                </button>
              </Link>
              <Link to="Registration">
                <button id="sgn-btn" className="animation a5">
                  SIGN UP
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Login;
